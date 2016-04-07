# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'shevy/version'

Gem::Specification.new do |spec|
  spec.name          = "shevy"
  spec.version       = Shevy::VERSION
  spec.authors       = ["Kyle Shevlin"]
  spec.email         = ["kyle.a.shevlin@gmail..com"]

  spec.summary       = %q{Sass library for typography and perfect vertical rhythm.}
  spec.description   = %q{Shevy is a small Sass library for simple, configurable typography with perfect vertical rhythm.}
  spec.homepage      = "https://github.com/kyleshevlin/shevy"
  spec.licenses      = ['MIT']

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.11"
  spec.add_development_dependency "rake", "~> 10.0"
end
