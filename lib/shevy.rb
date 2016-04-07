require "shevy/generator"

shevy_path = File.expand_path('../../core', __FILE__)

ENV["SASS_PATH"] = [
  ENV["SASS_PATH"],
  shevy_path
].compact.join(File::PATH_SEPARATOR)
