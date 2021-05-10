<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php foreach ($rows as $id => $row): ?>
  <div class="view-info-material <?php if ($id == 0) print 'show'; ?>" data-id="<?php print $title; ?>">
    <?php print $row; ?>
  </div>
  <?php $class_view = 'hide'; ?>
<?php endforeach; ?>
