require 'shevy/version'
require 'fileutils'
require 'thor'
require 'pathname'

module Shevy
  class Generator < Thor
    map ["-v", "--version"] => :version

    desc "install", "Install Shevy into your project"
    method_options :path => :string, :force => :boolean
    def install
      if shevy_files_already_exist? && !options[:force]
        puts "Shevy files already installed, doing nothing."
      else
        install_files
        puts "Shevy files installed to #{install_path}/"
      end
    end

    desc "update", "Update Shevy"
    method_options :path => :string
    def update
      if shevy_files_already_exist?
        remove_shevy_directory
        install_files
        puts "Shevy files updated."
      else
        puts "No existing shevy installation. Doing nothing."
      end
    end

    desc "version", "Show Shevy version"
    def version
      say "Shevy #{Shevy::VERSION}"
    end

    private

    def shevy_files_already_exist?
      install_path.exist?
    end

    def install_path
      @install_path ||= if options[:path]
          Pathname.new(File.join(options[:path], "shevy"))
        else
          Pathname.new("shevy")
        end
    end

    def install_files
      make_install_directory
      copy_in_scss_files
    end

    def remove_shevy_directory
      FileUtils.rm_rf("shevy")
    end

    def make_install_directory
      FileUtils.mkdir_p(install_path)
    end

    def copy_in_scss_files
      FileUtils.cp_r(all_stylesheets, install_path)
    end

    def all_stylesheets
      Dir["#{stylesheets_directory}/*"]
    end

    def stylesheets_directory
      File.join(top_level_directory, "core")
    end

    def top_level_directory
      File.dirname(File.dirname(File.dirname(__FILE__)))
    end
  end
end
