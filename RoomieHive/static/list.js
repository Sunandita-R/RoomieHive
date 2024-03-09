document.addEventListener('DOMContentLoaded', function() {
  const amenitiesInput = document.getElementById('amenities-input');
  const selectedAmenitiesContainer = document.getElementById('selected-amenities');
  const amenitiesDropdown = document.getElementById('amenities-dropdown');

  // Sample list of amenities
  const amenitiesList = [
    'Furnished',
    'In Unit Laundry',
    'Television',
    'Private Bath',
    'Outdoor Parking',
    'Air Conditioning'
  ];

  // Function to filter amenities based on user input
  function filterAmenities(input) {
    return amenitiesList.filter(amenity => amenity.toLowerCase().includes(input.toLowerCase()));
  }

  // Function to display filtered amenities in dropdown
  function displayAmenitiesDropdown(options) {
    amenitiesDropdown.innerHTML = '';

    options.forEach(option => {
      const optionElem = document.createElement('div');
      optionElem.textContent = option;
      optionElem.classList.add('amenity-option');
      amenitiesDropdown.appendChild(optionElem);

      // Event listener for selecting an option from the dropdown
      optionElem.addEventListener('click', function() {
        const selectedAmenity = option;
        addSelectedAmenity(selectedAmenity);
        amenitiesInput.value = '';
        amenitiesDropdown.innerHTML = '';
      });
    });

    amenitiesDropdown.style.display = 'block';
  }

  // Event listener for input in the amenities field
  amenitiesInput.addEventListener('input', function(event) {
    const input = event.target.value;
    const filteredAmenities = filterAmenities(input);

    if (filteredAmenities.length > 0) {
      displayAmenitiesDropdown(filteredAmenities);
    } else {
      amenitiesDropdown.style.display = 'none';
    }
  });

  // Function to add selected amenity to the list
  function addSelectedAmenity(amenity) {
    const tag = document.createElement('div');
    tag.textContent = amenity;
    tag.classList.add('selected-amenity');

    const closeButton = document.createElement('span');
    closeButton.textContent = 'x';
    closeButton.classList.add('close-button');
    closeButton.addEventListener('click', function() {
      selectedAmenitiesContainer.removeChild(tag);
    });

    tag.appendChild(closeButton);
    selectedAmenitiesContainer.appendChild(tag);
  }
 
    const safetyInput = document.getElementById('safety-input');
    const selectedSafety = document.getElementById('selected-safety');
  
    // Array to store selected safety options
    let selectedOptions = [];
  
    // Function to add selected safety option
    function addSafetyOption(option) {
      selectedOptions.push(option);
      renderSelectedSafety();
    }
  
    // Function to remove selected safety option
    function removeSafetyOption(option) {
      selectedOptions = selectedOptions.filter(item => item !== option);
      renderSelectedSafety();
    }
  
    // Function to render selected safety options
    function renderSelectedSafety() {
      selectedSafety.innerHTML = '';
      selectedOptions.forEach(option => {
        const tag = document.createElement('div');
        tag.classList.add('selected-tag');
        tag.textContent = option;
        tag.addEventListener('click', function() {
          removeSafetyOption(option);
        });
        selectedSafety.appendChild(tag);
      });
    }
  
    // Dummy safety options (replace with your actual options)
    const safetyOptions = ['Smoke Alarm', 'Carbon Monoxide Detector', 'Security System', 'Fire Extinguisher'];
  
    // Function to filter safety options based on user input
    function filterSafetyOptions(input) {
      return safetyOptions.filter(option => option.toLowerCase().includes(input.toLowerCase()));
    }
  
    // Function to handle input event
    safetyInput.addEventListener('input', function() {
      const inputValue = safetyInput.value.trim();
      if (inputValue === '') {
        renderSelectedSafety();
        return;
      }
      const filteredOptions = filterSafetyOptions(inputValue);
      selectedSafety.innerHTML = '';
      filteredOptions.forEach(option => {
        const tag = document.createElement('div');
        tag.classList.add('selected-tag');
        tag.textContent = option;
        tag.addEventListener('click', function() {
          addSafetyOption(option);
        });
        selectedSafety.appendChild(tag);
      });
    });

  var selDiv = document.getElementById('selectedFiles');
  var storedFiles = [];

  document.getElementById('files').addEventListener('change', handleFileSelect);
  document.getElementById('myForm').addEventListener('submit', handleForm);

  function handleFileSelect(e) {
    var files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);

    filesArr.forEach(function(f) {
      if (!f.type.match('image.*')) {
        return;
      }
      storedFiles.push(f);

      var reader = new FileReader();
      reader.onload = function(e) {
        var html = '<div><img src="' + e.target.result + '" data-file="' + f.name + '" class="selFile" title="Click to remove">' + f.name + '<br clear="left"/></div>';
        selDiv.insertAdjacentHTML('beforeend', html);
      }
      reader.readAsDataURL(f);
    });
  }

  function handleForm(e) {
    e.preventDefault();
    var data = new FormData();

    for (var i = 0; i < storedFiles.length; i++) {
      data.append('files', storedFiles[i]);
    }

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'handler.cfm', true);

    xhr.onload = function(e) {
      if (this.status == 200) {
        console.log(e.currentTarget.responseText);
        alert(e.currentTarget.responseText + ' items uploaded.');
      }
    }

    xhr.send(data);
  }

  document.body.addEventListener('click', function(e) {
    if (e.target.classList.contains('selFile')) {
      var file = e.target.dataset.file;
      for (var i = 0; i < storedFiles.length; i++) {
        if (storedFiles[i].name === file) {
          storedFiles.splice(i, 1);
          break;
        }
      }
      e.target.parentNode.remove();
    }
  });
  });
 
  
  
