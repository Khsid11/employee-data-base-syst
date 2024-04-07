document.addEventListener("DOMContentLoaded", function() {
  const addEmployeeBtn = document.querySelector('.add-employee');
  const modal = document.querySelector('.add-employee-modal');
  const closeBtn = document.querySelector('.close-btn');
  const submitBtn = document.querySelector('.submit-btn');
  const form = document.querySelector('.add-employee-form');
  const namesContainer = document.querySelector('.employees__names');
  const detailsContainer = document.querySelector('.employees__single');

  // Function to toggle modal visibility
  function toggleModal() {
    modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
  }

  // Event listener for add employee button
  addEmployeeBtn.addEventListener('click', toggleModal);

  // Event listener for close button
  closeBtn.addEventListener('click', toggleModal);


 // Function to add a new employee
function addEmployee(firstName, lastName, email, contactNumber, salary, address, dob, imageFile) {
  const employee = document.createElement('div');
  employee.classList.add('employee-name');
  employee.innerHTML = `
    <span>${firstName} ${lastName}</span>
    <span class="delete-btn">&#x2715;</span>
  `;
  namesContainer.appendChild(employee);

  employee.addEventListener('click', function() {
    detailsContainer.innerHTML = `
      <img src="${imageFile ? URL.createObjectURL(imageFile) : 'https://via.placeholder.com/150'}" alt="${firstName} ${lastName}" />
      <h3>${firstName} ${lastName}</h3>
      <p>Email: ${email}</p>
      <p>Contact: ${contactNumber}</p>
      <p>Salary: ${salary}</p>
      <p>Address: ${address}</p>
      <p>Date of Birth: ${dob}</p>
    `;
  });

  const deleteBtn = employee.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevents the employee click event from triggering
    employee.remove();
    detailsContainer.innerHTML = ''; // Clear details when an employee is removed
  });
}


  // Event listener for submit button
  submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const contactNumber = formData.get('contactNumber');
    const salary = formData.get('salary');
    const address = formData.get('address');
    const dob = formData.get('dob');
    const imageFile = formData.get('image'); // Get the uploaded image file
    addEmployee(firstName, lastName, email, contactNumber, salary, address, dob, imageFile);
    toggleModal();
    form.reset();
  });
});
