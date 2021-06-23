<template>
<!-- Contact Section Start -->
<section id="contact">
    <div class="container">
        <h2 class="section_title_blue">Get <span>In Touch</span></h2>
        <div class="row">
            <div class="col-md-6">
                <div class="contact_area">
                    <p>Mattis ut phasellus. Habitant sollicitudin vivamus massa ultricies lacus fames dis nisi, nam dui. Vivamus penatibus fermentum magnis ac.</p>
                    <form id="contact-form" class="contact_message" action="email.php" method="post">
                        <div class="row">
                            <div class="form-group col-md-6 col-sm-6">
                                <input class="form-control" id="firstname" type="text" name="firstname" placeholder="First Name">
                            </div>
                            <div class="form-group col-md-6 col-sm-6">
                                <input class="form-control" id="lastname" type="text" name="lastname" placeholder="Last Name">
                            </div>
                            <div class="form-group col-md-6 col-sm-6">
                                <input class="form-control" id="email" type="text" name="email" placeholder="Email Address">
                            </div>
                            <div class="form-group col-md-6 col-sm-6">
                                <input class="form-control" id="subject" type="text" name="subject" placeholder="Enter Subject">
                            </div>
                            <div class="form-group col-md-12 col-sm-12">
                                <textarea class="form-control" id="message" name="message" placeholder="Message"></textarea>
                            </div>
                            <div class="form-group col-md-12 col-sm-12">
                                <input id="send" class="btn btn-default" type="submit" value="Send">
                            </div>
                            <div class="col-md-12">
                                <div class="error-handel">
                                    <div id="success">Your email sent Successfully, Thank you.</div>
                                    <div id="error"> Error occurred while sending email. Please try again later.</div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-6">
                        <div class="contact_right">
                            <h5 class="inner-title">Our Address</h5>
                            <p>1707 Orlando Central pkwy ste 100 Orlando FL, USA</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="contact_right">
                            <h5 class="inner-title">Contact Info</h5>
                            <p>(+241) 542 34251, (+241) 234 88232 info@webmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Contact Section End -->
</template>