let dropdowns = document.querySelectorAll('.dropdown-toggle')
dropdowns.forEach((dd)=>{
    dd.addEventListener('click', function (e) {
        var el = this.nextElementSibling
        el.style.display = el.style.display==='block'?'none':'block'
    })
})


// for advanced search popover
const exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  const modalTitle = exampleModal.querySelector('.modal-title')
  const modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = `New message to ${recipient}`
  modalBodyInput.value = recipient
})



$('.dropdown_container')
	.on('click', '.dropdown_button', function() {
        $(this).siblings('.dropdown_list').toggle();
	})
	.on('input', '.dropdown_search', function() {
    	var target = $(this);
        var dropdownList = target.closest('.dropdown_list');
    	var search = target.val().toLowerCase();
    
    	if (!search) {
            dropdownList.find('li').show();
            return false;
        }
    
    	dropdownList.find('li').each(function() {
        	var text = $(this).text().toLowerCase();
            var match = text.indexOf(search) > -1;
            $(this).toggle(match);
        });
	})
	.on('change', '[type="checkbox"]', function() {
        var container = $(this).closest('.dropdown_container');
        var numChecked = container. find('[type="checkbox"]:checked').length;
    	container.find('.quantity').text(numChecked || 'Any');
	});

// JSON of States for demo purposes
var usStates = [
    { name: 'ALABAMA', abbreviation: 'AL'},
    { name: 'ALASKA', abbreviation: 'AK'},
    { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
    { name: 'ARIZONA', abbreviation: 'AZ'},
    { name: 'ARKANSAS', abbreviation: 'AR'},
    { name: 'CALIFORNIA', abbreviation: 'CA'},
    { name: 'COLORADO', abbreviation: 'CO'},
    { name: 'CONNECTICUT', abbreviation: 'CT'},
    { name: 'DELAWARE', abbreviation: 'DE'},
    { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
    { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
    { name: 'FLORIDA', abbreviation: 'FL'},
    { name: 'GEORGIA', abbreviation: 'GA'},
    { name: 'GUAM', abbreviation: 'GU'},
    { name: 'HAWAII', abbreviation: 'HI'},
    { name: 'IDAHO', abbreviation: 'ID'},
    { name: 'ILLINOIS', abbreviation: 'IL'},
    { name: 'INDIANA', abbreviation: 'IN'},
    { name: 'IOWA', abbreviation: 'IA'},
    { name: 'KANSAS', abbreviation: 'KS'},
    { name: 'KENTUCKY', abbreviation: 'KY'},
    { name: 'LOUISIANA', abbreviation: 'LA'},
    { name: 'MAINE', abbreviation: 'ME'},
    { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
    { name: 'MARYLAND', abbreviation: 'MD'},
    { name: 'MASSACHUSETTS', abbreviation: 'MA'},
    { name: 'MICHIGAN', abbreviation: 'MI'},
    { name: 'MINNESOTA', abbreviation: 'MN'},
    { name: 'MISSISSIPPI', abbreviation: 'MS'},
    { name: 'MISSOURI', abbreviation: 'MO'},
    { name: 'MONTANA', abbreviation: 'MT'},
    { name: 'NEBRASKA', abbreviation: 'NE'},
    { name: 'NEVADA', abbreviation: 'NV'},
    { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
    { name: 'NEW JERSEY', abbreviation: 'NJ'},
    { name: 'NEW MEXICO', abbreviation: 'NM'},
    { name: 'NEW YORK', abbreviation: 'NY'},
    { name: 'NORTH CAROLINA', abbreviation: 'NC'},
    { name: 'NORTH DAKOTA', abbreviation: 'ND'},
    { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
    { name: 'OHIO', abbreviation: 'OH'},
    { name: 'OKLAHOMA', abbreviation: 'OK'},
    { name: 'OREGON', abbreviation: 'OR'},
    { name: 'PALAU', abbreviation: 'PW'},
    { name: 'PENNSYLVANIA', abbreviation: 'PA'},
    { name: 'PUERTO RICO', abbreviation: 'PR'},
    { name: 'RHODE ISLAND', abbreviation: 'RI'},
    { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
    { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
    { name: 'TENNESSEE', abbreviation: 'TN'},
    { name: 'TEXAS', abbreviation: 'TX'},
    { name: 'UTAH', abbreviation: 'UT'},
    { name: 'VERMONT', abbreviation: 'VT'},
    { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
    { name: 'VIRGINIA', abbreviation: 'VA'},
    { name: 'WASHINGTON', abbreviation: 'WA'},
    { name: 'WEST VIRGINIA', abbreviation: 'WV'},
    { name: 'WISCONSIN', abbreviation: 'WI'},
    { name: 'WYOMING', abbreviation: 'WY' }
];

// <li> template
var stateTemplate = _.template(
    '<li>' +
    	'<input name="<%= abbreviation %>" type="checkbox">' +
    	'<label for="<%= abbreviation %>"><%= capName %></label>' +
    '</li>'
);

// Populate list with states
_.each(usStates, function(s) {
    s.capName = _.startCase(s.name.toLowerCase());
    $('.ul').append(stateTemplate(s));
});




// for adminpanel_AuctionBtn
var typed = "";
$('#mySelect2').select2({
  language: {
    noResults: function(term) {
      typed = $('.select2-search__field').val();
    }
  }
  
});
$('#mySelect2').on('select2:select', function (e) {
  typed = ""; // clear
});
$("#but").on("click", function() {
  if (typed) {
      // var value = prompt("Do you have a state abbriviation for "+typed+"?"); // change typed to value where necessary

    // Set the value, creating a new option if necessary
    if ($('#mySelect2').find("option[value='" + typed + "']").length) {
      $('#mySelect2').val(typed).trigger('change');
    } else {
      // Create a DOM Option and pre-select by default
      
      var newOption = new Option(typed, typed, true, true); 
      // Append it to the select
      $('#mySelect2').append(newOption).trigger('change');
    }
  }
});





// Manual or Import XSV files
function show1(){
  document.getElementById('div1').style.display ='none';
}
function show2(){
  document.getElementById('div1').style.display = 'block';
}


// product type
function Normal(){
  document.getElementById('div_type').style.display ='none';
}
function Under(){
  document.getElementById('div_type').style.display = 'block';
}

// summernote
    $(document).ready(function() {
    $("#summernote").summernote({
        placeholder: "Write your content here",
        height: 200,
    })
});
           