# \<SHORTCODE>

https://shortcode.dev

# Adding a new short codes

1. Create a new html file in the collection folder, i.e:

     ```
     _collections
        _html
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
    shortcode
    ```

3. When ready subimt a pull request to the `dev` branch (`https://github.com/proochster/shortcode/tree/dev`). 

# Creating a new collections

1. Add the new collection in `/_config.yml` file following this structure. `HTML` collection was used in the example below. For the collection icon checkout [Font Awesome](https://fontawesome.com/cheatsheet)

    ```
    html:
        output: false
        permalink: html-cheatsheet
        icon: fab fa-html5
    ```

2. Create new folder in the `/_collections/` directory:

     ```
     _collections
        _html
     ```

3. Add another markdown highlight case in the `/_includes/shortcodes.html` file like so:

    ``` liquid
    {% when 'html' %}{% highlight html %}{{ code.content }}{% endhighlight %} 
    ```  

4. When ready subimt a pull request to the `dev` branch (`https://github.com/proochster/shortcode/tree/dev`).  

# Jekyll

Requirements: Ruby, Gems

Add `shortcode` entry to your hosts list.

Install bundler `gem install bundler jekyll`

Install project `bundle install`

Use `bundle exec jekyll serve` when running for the first time or after _config.yml has been changed.

Otherwise use `jekyll serve` or the short version `jekyll s`

<!-- # Webepack

... -->
