function handleFile() {
    const fileInput = document.getElementById('fileInput');
    const morningDiv = document.getElementById('morning');
    const lunchDiv = document.getElementById('lunch');
    const dinnerDiv = document.getElementById('dinner');
    const otherDiv = document.getElementById('other');
  
    morningDiv.innerHTML = '<h2>Morning</h2>';
    lunchDiv.innerHTML = '<h2>Lunch</h2>';
    dinnerDiv.innerHTML = '<h2>Dinner</h2>';
    otherDiv.innerHTML = '<h2>Other</h2>';
  
    const file = fileInput.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const content = e.target.result;
        const dataArray = parseCSV(content);
  
        if (dataArray.length > 0) {
          createBoxesByCategory(dataArray, morningDiv, 'Morning');
          createBoxesByCategory(dataArray, lunchDiv, 'Lunch');
          createBoxesByCategory(dataArray, dinnerDiv, 'Dinner');
          createBoxesByCategory(dataArray, otherDiv, 'other');
        } else {
          morningDiv.innerHTML = '<h2>Morning</h2>Error parsing file.';
        }
      };
  
      reader.readAsText(file);
    } else {
      morningDiv.innerHTML = '<h2>Morning</h2>No file selected.';
    }
  }
  
  function parseCSV(content) {
    const lines = content.split('\n');
    const dataArray = [];
  
    for (let i = 0; i < lines.length; i++) {
      const values = parseCSVLine(lines[i]);
      dataArray.push(values);
    }
  
    return dataArray;
  }
  
  function parseCSVLine(line) {
    const values = [];
    let insideQuotes = false;
    let currentValue = '';
  
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
  
      if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        values.push(currentValue.trim());
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
  
    values.push(currentValue.trim()); // Add the last value
    return values;
  }
  
  function createBoxesByCategory(dataArray, container, category) {
    for (let i = 0; i < dataArray.length; i++) {
      const currentCategory = dataArray[i][5].trim();
  
      if (currentCategory.toLowerCase() === category.toLowerCase()) {
        const box = document.createElement('div');
        box.className = 'box';
  
        const attributesToDisplay = [dataArray[0][0], dataArray[0][1], dataArray[0][2], dataArray[0][3], dataArray[0][4]];
  
        for (let j = 0; j < attributesToDisplay.length; j++) {
          const attribute = document.createElement('div');
          attribute.className = 'attribute';
  
          if (j === 0) {
            attribute.style.color = 'red';
            attribute.style.fontWeight = 'bold';
          }
  
          let attributeValue = dataArray[i][j];
  
          // Add line breaks for ethnicity and ingredients
          if (j === 2 || j === 3) {
            attributeValue = attributeValue.replace(/, /g, ',<br>');
          }
  
          attribute.innerHTML = `<strong>${attributesToDisplay[j]}:</strong> ${attributeValue}`;
          box.appendChild(attribute);
        }
  
        container.appendChild(box);
      }
    }
  }
  
  
  
  
  
  