javascript:(function insert_green_emoji() {
  if (typeof(document.activeElement.value) === 'undefined') return;

  var greens = [
    'bamboo',
    'battery',
    'bug',
    'cactus',
    'chart',
    'christmas_tree',
    'crocodile',
    'deciduous_tree',
    'dollar',
    'dragon',
    'dragon_face',
    'earth_africa',
    'earth_americas',
    'earth_asia',
    'eight_spoked_asterisk',
    'evergreen_tree',
    'four_leaf_clover',
    'frog',
    'green_apple',
    'green_book',
    'green_heart',
    'herb',
    'leaves',
    'negative_squared_cross_mark',
    'palm_tree',
    'pear',
    'recycle',
    'seedling',
    'snake',
    'sparkle',
    'tea',
    'tennis',
    'turtle',
    'u6307',
    'white_check_mark',
    'womans_hat'
  ];

  var random_green_thing = greens[Math.floor(Math.random() * greens.length)],
      emoji_string = `:${random_green_thing}:`,
      active_el = document.activeElement,
      cursor_start_pos = active_el.selectionStart,
      cursor_end_pos = active_el.selectionEnd,
      init_value = active_el.value,
      cursor_pos_afterwards = cursor_start_pos + emoji_string.length;

  active_el.value = `${init_value.slice(0, cursor_start_pos)}${emoji_string}${init_value.slice(cursor_end_pos)}`;
  active_el.setSelectionRange(cursor_pos_afterwards, cursor_pos_afterwards);
})();
