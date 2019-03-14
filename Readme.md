# \<SHORTCODE>

# Jekyll

Requirements: Ruby, Gems

Add `shortcode` entry to your hosts list.

Install bundler `gem install bundler jekyll`

Install project `bundle install`

Use `bundle exec jekyll serve` when running for the first time or after _config.yml has been changed.

Otherwise use `jekyll serve` or the short version `jekyll s`

# Webepack

...

# Creating new collections

1. Add new collection in the `/_config.yml` file following this structure. `HTML` collection used in the example below.
    -   HTML:
        -   output: false
        -   permalink: html-cheatsheet
        -   icon: fab fa-html5 - [Font Awesome](https://fontawesome.com/cheatsheet) icons
2. Create new folder in the root directory `_html`
3. Add another markdown highlight case in the `/_includes/shortcodes.html` file:

``` liquid
{% when 'html' %}{% highlight html %}{{ code.content }}{% endhighlight %} 
```   