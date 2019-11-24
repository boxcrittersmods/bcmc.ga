#!/usr/bin/env ruby

require "html/proofer"
HTMLProofer.check_directory("./_site",{
    :href_ignore => [
        "#"
    ],
    :disable_external => true,
    :alt_ignore => '/.*/'
}).run