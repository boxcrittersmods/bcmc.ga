---
layout: default
title: Collections
---
{% for collection in site.collections %}
{% assign normalTitle=collection.label|capitalize %}
## {{collection.title|default:normalTitle}}
{% for item in site[collection.label] %}
{% include listing.html item=item %}
{% endfor %}
{% endfor %}
