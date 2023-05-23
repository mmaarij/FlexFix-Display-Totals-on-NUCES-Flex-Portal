(function() {
  // Find the div with class "m-portlet"
  const portlet = document.querySelector('.m-portlet');

  // Check if the total and obtained marks elements already exist
  let totalMarksElement = portlet.querySelector('h5[data-type="total"]');
  let obtainedMarksElement = portlet.querySelector('h5[data-type="obtained"]');

  // If the elements don't exist, create new ones and append them to the portlet
  if (!totalMarksElement) {
    totalMarksElement = document.createElement('h5');
    totalMarksElement.setAttribute('data-type', 'total');
	totalMarksElement.style.color = 'white';
	totalMarksElement.style.marginLeft = '30px';
	totalMarksElement.style.marginTop = '7px';
    portlet.appendChild(totalMarksElement);
  }
  
  if (!obtainedMarksElement) {
    obtainedMarksElement = document.createElement('h5');
    obtainedMarksElement.setAttribute('data-type', 'obtained');
	obtainedMarksElement.style.color = 'white';
	obtainedMarksElement.style.marginLeft = '30px';
    portlet.appendChild(obtainedMarksElement);
  }

  // Find the div with class "active"
  const activeDiv = document.querySelector('.tab-pane.active');

  // Find all the totalColweightage and totalColObtMarks elements inside the active div
  const weightageElements = activeDiv.querySelectorAll('.totalColweightage');
  const obtMarksElements = activeDiv.querySelectorAll('.totalColObtMarks');

  // Initialize variables for the totals
  let totalWeightage = 0;
  let totalObtMarks = 0;

  // Iterate over the totalColweightage elements and sum their values
  weightageElements.forEach(element => {
    const weightage = parseFloat(element.textContent);
    if (!isNaN(weightage)) {
      totalWeightage += weightage;
    }
  });

  // Iterate over the totalColObtMarks elements and sum their values
  obtMarksElements.forEach(element => {
    const obtMarks = parseFloat(element.textContent);
    if (!isNaN(obtMarks)) {
      totalObtMarks += obtMarks;
    }
  });

  // Update the content of the total and obtained marks elements
  totalMarksElement.textContent = 'Total Absolutes: ' + totalWeightage.toFixed(2);
  obtainedMarksElement.textContent = 'Obtained Absolutes: ' + totalObtMarks.toFixed(2);

  chrome.runtime.sendMessage('pageChange');
})();
