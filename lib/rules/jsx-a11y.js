'use strict';

var ERROR = 'error';

module.exports = {
  plugins: [
    'jsx-a11y',
  ],
  rules: {
    // enforce all aria-* props are valid
    'jsx-a11y/aria-props': ERROR,
    // enforce ARIA state and property values are valid
    'jsx-a11y/aria-proptypes': ERROR,
    // enforce that elements with ARIA roles must use a valid, non-abstract ARIA role
    'jsx-a11y/aria-role': ERROR,
    // enforce that elements that do not support ARIA roles, states, and properties do not have those attributes
    'jsx-a11y/aria-unsupported-elements': ERROR,
    // enforce heading (h1, h2, etc) elements contain accessible content
    'jsx-a11y/heading-has-content': [ERROR, 'Header'],
    // enforce an anchor element's href prop value is not just #
    'jsx-a11y/href-no-hash': ERROR,
    // enforce <html> element has lang prop
    'jsx-a11y/html-has-lang': ERROR,
    // enforce that <img> JSX elements use the alt prop
    'jsx-a11y/img-has-alt': ERROR,
    // enforce <img> alt prop does not contain the word "image", "picture", or "photo"
    'jsx-a11y/img-redundant-alt': ERROR,
    // enforce that <label> elements have the htmlFor prop
    'jsx-a11y/label-has-for': ERROR,
    // enforce lang attribute has a valid value
    'jsx-a11y/lang': ERROR,
    // enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users
    'jsx-a11y/mouse-events-have-key-events': ERROR,
    // enforce that the accessKey prop is not used on any element to avoid complications with keyboard
    // commands used by a screenreader
    'jsx-a11y/no-access-key': ERROR,
    // enforce <marquee> elements are not used
    'jsx-a11y/no-marquee': ERROR,
    // enforce that onBlur is used instead of onChange
    'jsx-a11y/no-onchange': ERROR,
    // enforce that elements with onClick handlers must be focusable
    'jsx-a11y/onclick-has-focus': ERROR,
    // enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute
    'jsx-a11y/onclick-has-role': ERROR,
    // enforce that elements with ARIA roles must have all required attributes for that role
    'jsx-a11y/role-has-required-aria-props': ERROR,
    // enforce that elements with explicit or implicit roles defined contain only aria-* properties supported
    // by that role
    'jsx-a11y/role-supports-aria-props': ERROR,
    // enforce scope prop is only used on <th> elements
    'jsx-a11y/scope': ERROR,
    // enforce tabIndex value is not greater than zero
    'jsx-a11y/tabindex-no-positive': ERROR,
  },
};
