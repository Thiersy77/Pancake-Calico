var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint; // Declare variables
elForm          = document.getElementById('formSignup');          // Store elements
elSelectPackage = document.getElementById('package');
elPackageHint   = document.getElementById('packageHint');
elTerms         = document.getElementById('terms');
elTermsHint     = document.getElementById('termsHint');

function packageHint() {                                 // Declare function
  var pack = this.options[this.selectedIndex].value;     // Get selected option
  if (pack === 'single') {                              // If monthly package
    elPackageHint.innerHTML = 'Save $50 if you pay for the bundle';//Show this msg
  } else {                                               // Otherwise
    elPackageHint.innerHTML = 'Wise choice!';            // Show this message
  }
}

function checkTerms(event) {                             // Declare function
  if (!elTerms.checked) {                                // If checkbox ticked
    elTermsHint.innerHTML = 'You must agree to the terms.'; // Show message
    event.preventDefault();                              // Don't submit form
  }
}

//Create event listeners: submit calls checkTerms(), change calls packageHint()
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);