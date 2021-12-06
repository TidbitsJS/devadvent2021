const slugify = text => {
    // Return a "slugified" version of the text. This means:
    // - Everything in lowercase
    // - Replace all letters with accents, umlauts, etc. to a normalized letter
    //   (e.g. Déjà Vu -> Deja Vu, Jürgen -> Jurgen, etc.)
    //   (hint: https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript)
    // - Replace all other non-alphanumeric characters (incl. spaces) with a hyphen (-)
    // - Leading and trailing hyphens stripped
    // - Multiple consecutive hyphens replaced with a single hyphen

    // Normalize text
    text = text.toLowerCase();

    // Replace all letters with accents, umlauts, etc. to a normalized letter
    text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // Replace all non-alphanumeric characters (incl. spaces) with a hyphen (-)
    text = text.replace(/[^a-z0-9]/gi, '-');

    // Leading and trailing hyphens stripped
    text = text.replace(/^\-+/, '');
    text = text.replace(/\-+$/, '');

    // Multiple consecutive hyphens replaced with a single hyphen
    text = text.replace(/\-+/g, '-');
    
    return text
}

module.exports = { slugify }
