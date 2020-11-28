


// Clear all images
function reset() {
	sliderImages = document.getElementsByClassName("slide");
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
    on_slide(0);
    return 0;
}

function on_slide(slider_num) {
	reset();
    sliderImages = document.getElementsByClassName("slide");
    sliderImages[slider_num].style.display = "block";
    current = validate_current(slider_num);
    return (current);
}

function slideLeft() {
    current--;
    current = validate_current(current);
    on_slide(current);
    return (current);
}

function slideRight() {
    current++;
    current = validate_current(current);
    on_slide(current);
    return (current);
}

function validate_current(current_local) {
    sliderImages = document.getElementsByClassName("slide");
    if (current_local >= sliderImages.length) {
        return 0;
    }
    else if (current_local < 0) {
        return (sliderImages.length - 1);
    }
    else {
        return current_local;
    }
}


function reset_dynamic(class_name) {
    sliderImages = document.getElementsByClassName(class_name);
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
  }
}
function startSlide_dynamic(class_name) {
    on_slide_dynamic(0, class_name);
    return 0;
}
function on_slide_dynamic(slider_num, class_name) {
	reset_dynamic(class_name);
    sliderImages = document.getElementsByClassName(class_name);
    sliderImages[slider_num].style.display = "block";
    current_local = validate_current_dynamic(slider_num, class_name);
    return (current_local);
}
function slideLeft_dynamic(current_local, class_name) {
    current_local--;
    current_local = validate_current_dynamic(current_local, class_name);
    on_slide_dynamic(current_local, class_name);
    return (current_local);
}

function slideRight_dynamic(current_local, class_name) {
    current_local++;
    current_local = validate_current_dynamic(current_local, class_name);
    on_slide_dynamic(current_local, class_name);
    return (current_local);
}

function validate_current_dynamic(current_local, class_name) {
    sliderImages = document.getElementsByClassName(class_name);
    if (current_local >= sliderImages.length) {
        return 0;
    }
    else if (current_local < 0) {
        return (sliderImages.length - 1);
    }
    else {
        return current_local;
    }
}
