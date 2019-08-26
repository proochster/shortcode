# \<SHORTCODE>

https://shortcode.dev

# Adding a new short code

1. Create a new html file in the collection folder, i.e:

     ```
     _collections
        _laravel
            new-short-code.html
     ```

2. Use this as a template for the front matter:

    ```
    ---
    title: new short code
    description: Short code description.  
    tags: html second-tag third-tag
    date: YYYY-MM-DD
    ---
    // Add the short code body here. 
    ```

3. When ready, submit a pull request to the `dev` branch (`https://github.com/proochster/shortcode/tree/dev`). 

# Creating a new collection

1. Add the new collection in `/_config.yml` file following this structure. `HTML` collection was used in the example below. For the collection icon checkout [Font Awesome](https://fontawesome.com/cheatsheet).

    ```
    collections:
        html:
            output: true
            link: html-cheatsheet
            icon: fab fa-html5
        css:
            ...
    ```

2. Under the defaults section in the _config.yml add the scope record following the example below.

    ```
    defaults:
    - scope:
        type: html
        values:
        layout: shortcode
        type: html
    ```

3. Create new folder in the `/_collections/` directory:

     ```
     _collections
        _html
     ```

4. Add another markdown highlight case in the `/_includes/shortcodes.html` and `/_includes/shortcode.html` files like so:

    ``` liquid
    {% when 'html' %}{% highlight html %}{{ code.content }}{% endhighlight %} 
    ```  

5. When ready subimt a pull request to the `dev` branch (`https://github.com/proochster/shortcode/tree/dev`).  

# Jekyll

Requirements: Ruby, Gems

Add `shortcode` entry to your hosts list.

Install bundler `gem install bundler jekyll`

Install project `bundle install`

Use `bundle exec jekyll serve` when running for the first time or after _config.yml has been changed.

Otherwise use `jekyll serve` or the short version `jekyll s`

# Workbox CLI

Command line interface tool for Progressive Web Apps
https://developers.google.com/web/tools/workbox/modules/workbox-cli

Initial workbox wizzard setup command. This will generate the workbox-config.js file.

`workbox wizard`

To build service worker run

`workbox generateSW workbox-config.js`


