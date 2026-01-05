import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Pipe to convert newlines to <br> tags for HTML display
 */
@Pipe({
  name: 'nl2br'
})
export class Nl2brPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    if (!value) {
      return '';
    }

    // Convert newlines to <br> tags
    const htmlString = value.replace(/\n/g, '<br>');

    // Sanitize and return as safe HTML
    return this.sanitizer.sanitize(1, htmlString) || '';
  }
}
