# Terms

Get related terms to a word.

Live version [here](https://victorribeiro.com/terms)

## About

I was asked to come up with a Neural Network capable of giving related terms to a word. This is useful when you're doing a [systematic review](https://en.wikipedia.org/wiki/Systematic_review) since related terms can help you build your [search string](https://whatis.techtarget.com/definition/search-string). So, instead of a Neural Network, I came up with this. This script get the related terms from [Wikipedia](https://wikipedia.org). It's kinda silly, but it works.

## How to use it

Insert the script to your project
```javascript
<script src="js/terms.js"></script>
```

Since the script will make 3 requests to Wikipedia, you should call it with async (feel free to change the code to use then).
```javascript
const terms = await getRelatedTerms('your_term_here');
```
