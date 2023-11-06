$(document).ready(function() {
  
    $('#myForm').submit(function(e) {
        // Reset error messages
        $('#nameError, #emailError, #phoneError').text('');

        // Custom validation: Check if the "Name" field is not empty and matches the specified format
        const name = $('#name').val().trim();
        if (name === '' || !/^[A-Za-z\s]+$/.test(name)) {
            $('#nameError').text('Name must contain only letters.');
            e.preventDefault(); // Prevent form submission
        }

        // Custom validation: Check if the "Email" field is a valid email address
        const email = $('#email').val().trim();
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        if (!emailPattern.test(email)) {
            $('#emailError').text('Please enter a valid email address.');
            e.preventDefault(); // Prevent form submission
        }

        // Custom validation: Check if the "Phone Number" is a 10-digit integer
        const phone = $('#phone').val().replace(/[^0-9]/g, ''); // Remove non-numeric characters
        if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
            $('#phoneError').text('Phone number must be a 10-digit mobile number.');
            e.preventDefault(); // Prevent form submission
        }
    });

    
    // this section is for read more
    $('#moreText').hide(); // Hide the content by default
    $('#readMoreBtn').click(function() {
      $('#moreText').slideToggle();
      $(this).text(function(i, text) {
        return text === "Read More" ? "Read Less" : "Read More";
      });
    });


    // 1
    $('#moreText1').hide(); // Hide the content by default
    $('#readMoreBtn1').click(function() {
      $('#moreText1').slideToggle();
      $(this).text(function(i, text) {
        return text === "Read More" ? "Read Less" : "Read More";
      });
    });



    // scroll to top bar
    $('.scroll-to-top').hide();

    // Show the button when scrolling down
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Smooth scroll to the top
    $('.scroll-to-top').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
      return false;
    });



    $(".get-price-offer").click(function() {
        $("#form-popup").css("display", "block");
    });

    // Close the form popup when the close button is clicked
    $("#close-button").click(function() {
        $("#form-popup").css("display", "none");
    });

    $('#carouselExampleControlsmain').carousel({
      interval: true
    });
    $('#carouselExampleControls').carousel({
      interval: 8000 // Adjust the interval to slow down (in milliseconds)
    });
    $('#carouselExampleControlsmain').carousel(); 

});
