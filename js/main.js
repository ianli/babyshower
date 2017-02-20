$(function() {
  updateHeaderLinks();

  $(window).on('hashchange', function() {
    updateHeaderLinks();
  });
});

function updateHeaderLinks() {
  // If the hash is blank, set it to a blank hash: '#'.
  var hash = location.hash || '#';

  $('.lo-header a').each(function() {
    var $this = $(this);
    var linkHref = $this.attr('href');
    $this.removeClass('lo-header__link--active');
    if (hash == linkHref) {
      $this.addClass('lo-header__link--active');
    }
  });
}
