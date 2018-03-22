create reducer ++
import reducers and combine ++
create store with reducers ++
apply middleware ++
define actions and actionTypes

define container and components

make a selector, create a MultiInstance MapStateToProps for it if needed


App
--News Category
---- Update the cat in state and trigger source fetch, can use selector here to memoize
--News Source
---- Update the source in state and trigger and use selector
--News Data



--create category select box
--create a source select box based on category 
  use reselect and memoization create the selector,
  so when the category changes it serves cached data

