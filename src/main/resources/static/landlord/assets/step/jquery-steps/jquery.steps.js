document.addEventListener('DOMContentLoaded', function () {
  var currentStep = 1;
  var totalSteps = 3;

  // Hàm để chuyển đổi giữa các step
  function switchStep(stepNumber) {
    // Ẩn tất cả các tab-pane
    var tabPanes = document.getElementsByClassName('tab-pane');
    for (var i = 0; i < tabPanes.length; i++) {
      tabPanes[i].classList.remove('active');
    }

    // Hiển thị tab-pane của step được chọn
    var targetStep = document.getElementById('step' + stepNumber);
    targetStep.classList.add('active');

    // Đánh dấu các li (step) tương ứng
    var steps = document.getElementsByClassName('nav-tabs')[0].getElementsByTagName('li');
    for (var j = 0; j < steps.length; j++) {
      if (j < stepNumber - 1) {
        steps[j].classList.add('done');
      } else {
        steps[j].classList.remove('done');
      }

      if (j === stepNumber - 1) {
        steps[j].classList.add('active');
      } else {
        steps[j].classList.remove('active');
      }
    }

    // Cập nhật biến currentStep
    currentStep = stepNumber;
  }

  // Xử lý khi ấn nút "Tiếp tục"
  var nextButton = document.getElementById('btn-next-update');

  if (nextButton !== null) {
    // Phần tử có ID "btn-next-update" tồn tại
    nextButton.addEventListener('click', function () {
      if (currentStep < totalSteps) {
        switchStep(currentStep + 1);
        updateButtonDisplay();
      }
    });
  }

  // Xử lý khi ấn nút "Quay lại"
  var backButton = document.getElementById('btn-back-update');

  if (backButton !== null) {
    // Phần tử có ID "btn-back-update" tồn tại
    backButton.addEventListener('click', function () {
      if (currentStep > 1) {
        switchStep(currentStep - 1);
        updateButtonDisplay();
      }
    });
  }

  // Xử lý khi ấn nút "Xác nhận"
  var finishButton = document.getElementById('btn-finish-update');

  if (finishButton !== null) {
    // Phần tử có ID "btn-finish-update" tồn tại
    finishButton.addEventListener('click', function () {
      // Thực hiện các xử lý khi ấn nút "Xác nhận" ở step 3
    });
  }

  // Cập nhật trạng thái hiển thị các nút dựa trên giá trị của currentStep
  function updateButtonDisplay() {
    if (currentStep === 1) {
      backButton.style.display = 'none'; // Ẩn nút "Back" ở step 1
      nextButton.style.display = 'inline-block'; // Hiển thị nút "Next" ở step 1
      finishButton.style.display = 'none'; // Ẩn nút "Xác nhận" ở step 1
    } else if (currentStep === 2) {
      backButton.style.display = 'inline-block'; // Hiển thị nút "Back" ở step 2
      nextButton.style.display = 'inline-block'; // Hiển thị nút "Next" ở step 2
      finishButton.style.display = 'none'; // Ẩn nút "Xác nhận" ở step 2
    } else {
      backButton.style.display = 'inline-block'; // Hiển thị nút "Back" ở step 3
      nextButton.style.display = 'none'; // Ẩn nút "Next" ở step 3
      finishButton.style.display = 'inline-block'; // Hiển thị nút "Xác nhận" ở step 3
    }
  }
});


//
  // JavaScript function to handle "Tiếp tục" button click
function handleNextStep() {
  var currentStep = $(".nav-tabs li.active");
  var nextStep = currentStep.next("li");

  if (nextStep.length === 1) {
    currentStep.removeClass("active").addClass("done");
    nextStep.removeClass("disabled").addClass("active");
  }
}

function handlePreviousStep() {
  var currentStep = $(".nav-tabs li.active");
  var previousStep = currentStep.prev("li");

  if (previousStep.length === 1) {
    currentStep.removeClass("active");
    previousStep.removeClass("done").addClass("active");
  }
}

function highlightInput(id) {
  var input = document.getElementById(id);
  input.placeholder = "Vui lòng nhập " + input.textContent;
  input.style.border = "2px solid red";
  input.style.color = "red";

  // Thêm sự kiện oninput vào input
  input.addEventListener('input', function () {
    input.style.border = "";
    input.style.color = "";
    input.placeholder = "Nhập " + input.textContent.toLowerCase();
  });
}

$(document).ready(function () {
  // Khởi tạo biến step hiện tại
  var currentStep = 1;

  // Ẩn nút "Back" khi ở step đầu tiên
  $("#btn-back").hide();

  // Ẩn nút "Finish" khi không ở step cuối cùng
  $("#btn-finish").hide();

  // Xử lý sự kiện khi nhấn nút "Next"
  $("#btn-next").click(function () {
    // Kiểm tra xem đã ở step cuối cùng chưa
    if (currentStep < 4) {
      // Kiểm tra các trường input trong step hiện tại
      var isValid = true;
      if (currentStep === 1) {
        if ($("#post-title").val().trim() === '') {
          highlightInput("post-title");
          isValid = false;
        }
        if ($("#post-phone").val().trim() === '') {
          highlightInput("post-phone");
          isValid = false;
        }
        if ($("#post-zalo").val().trim() === '') {
          highlightInput("post-zalo");
          isValid = false;
        }
        if ($("#post-content").val().trim() === '') {
          highlightInput("post-content");
          isValid = false;
        }
      }
      if (currentStep === 2) {
        if ($("#area-name").val().trim() === '') {
          highlightInput("post-title");
          isValid = false;
        }
        if ($("#province").val() === null) {
          highlightInput("province");
          isValid = false;
        }
        if ($("#district").val() === null) {
          highlightInput("district");
          isValid = false;
        }
        if ($("#soPhong").val().trim() === '') {
          highlightInput("district");
          isValid = false;
        }
        if ($("#ward").val() === null) {
          highlightInput("ward");
          isValid = false;
        }
        if ($("#exact-address").val().trim() === '') {
          highlightInput("exact-address");
          isValid = false;
        }
      }
      // if (currentStep === 3) {
      //   if ($("#room-name").val().trim() === '') {
      //     highlightInput("room-name");
      //     isValid = false;
      //   }
      //   if ($("#room-electricService").val().trim() === '') {
      //     highlightInput("room-electricService");
      //     isValid = false;
      //   }
      //   if ($("#room-waterService").val().trim() === '') {
      //     highlightInput("room-waterService");
      //     isValid = false;
      //   }
      //   if ($("#room-rentPrice").val().trim() === '') {
      //     highlightInput("room-rentPrice");
      //     isValid = false;
      //   }
      //   if ($("#room-description").val().trim() === '') {
      //     highlightInput("room-description");
      //     isValid = false;
      //   }
      //   if ($("#room-video").val().trim() === '') {
      //     highlightInput("room-video");
      //     isValid = false;
      //   }
      // }

      if (isValid) {
        handleNextStep();
        // Hiển thị step tiếp theo
        $("#step" + currentStep).hide();
        currentStep++;
        $("#step" + currentStep).show();
        // Ẩn/hiện các nút "Back", "Next" và "Finish" tương ứng
        if (currentStep === 2) {
          $("#btn-back").show();
        } else if (currentStep === 4) {
          $("#btn-next").hide();
          $("#btn-finish").show();
        }
      }
    }
  });

  // Xử lý sự kiện khi nhấn nút "Back"
  $("#btn-back").click(function () {
    // Kiểm tra xem đã ở step đầu tiên chưa
    handlePreviousStep();

    if (currentStep > 1) {
      // Hiển thị step trước đó
      $("#step" + currentStep).hide();
      currentStep--;
      $("#step" + currentStep).show();

      // Ẩn/hiện các nút "Back", "Next" và "Finish" tương ứng
      if (currentStep === 1) {
        $("#btn-back").hide();
      } else if (currentStep === 3) {
        $("#btn-next").show();
        $("#btn-finish").hide();
      }
    }
  });

  $("#btn-finish").click(function () {
    // Lưu ảnh cho từng phòng trước
    uploadOneImage_save();

    const numRooms = parseInt($("#soPhong").val(), 10);
    let uploadPromises = [];
    for (let i = 1; i <= numRooms; i++) {
      uploadPromises.push(uploadListImage_save(i));
    }

    // Khi tất cả ảnh đã được lưu, lấy thông tin của các phòng và lưu bài viết
    Promise.all(uploadPromises).then((responses) => {
      const roomDataList = [];
      responses.forEach((response, index) => {
        const roomData = layThongTinPhong(index + 1);
        roomData.image = response; // Gán ảnh đã được lưu cho phòng
        roomDataList.push(roomData);
      });

      const postData = preparePostData(roomDataList);

      $.ajax({
        type: "POST",
        url: "/leo/PostNews/save-post-news",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(postData),
        success: function (response) {
          alert("Thêm bài viết thành công");
          // Chuyển đến trang danh sách bài viết
          window.location.href = "/leo/home";
        },
        error: function (jqXHR, textStatus, errorThrown) {
          alert("Đã có lỗi xảy ra: " + textStatus + ": " + errorThrown);
        }
      });
    }).catch(function (error) {
      // Xử lý lỗi nếu có
      alert("Đã có lỗi xảy ra: " + error);
    });

    return false; // ngăn chặn sự kiện mặc định của phương thức submit()
  });

  function preparePostData(roomDataList) {
    // Lấy dữ liệu từ các trường input của form
    var currentDateTime = new Date();
    var d = $('#district option:selected').val();
    var w = $('#ward option:selected').val();
    var p = $('#province option:selected').val();
    return {
      "name": $("#area-name").val(),
      "idProvince": p,
      "latitude": "20.985961",
      "longitude": "105.798094",
      "idDistrict": d,
      "idWard": w,
      "exactAddress": $("#exact-address").val(),
      "thumbnail": "",
      "phoneNumber": removePhoneNumber($("#post-phone").val()),
      "phoneZalo": removePhoneNumber($("#post-zalo").val()),
      "title": $("#post-title").val(),
      "content": $("#post-content").val(),
      "roomDTOList": roomDataList,
      "numberDate": "5",
      "createdTime": currentDateTime,
      "status": "0",
      "idUser": "2",
    };
  }

  function layThongTinPhong(index) {
    var electricService = removeNumberFormatting(
        $("#room-electricService-" + index).val());
    var waterService = removeNumberFormatting(
        $("#room-waterService-" + index).val());
    var rentPrice = removeNumberFormatting($("#room-rentPrice-" + index).val());
    var acreage = removeNumberFormatting($("#room-acreage-" + index).val());
    return {
      "description": $("#room-description-" + index).val(),
      "electricService": electricService,
      "waterService": waterService,
      "rentPrice": rentPrice,
      "acreage": acreage,
      "image": "",
      "video": $("#room-video-" + index).val(),
      "name": $("#room-name-" + index).val(),
    };
  }

});

// // Lấy đối tượng nút back và next
// var backBtn = $('#btn-back');
// var nextBtn = $('#btn-next');
// var finishBtn = $('#btn-finish');
//
// // Bắt đầu ở step 1
// var currentStep = 1;
//
// // Ẩn nút back ở step 1
// backBtn.hide();
//
// // Bắt sự kiện click cho nút next
// nextBtn.on('click', function () {
//     // Tăng currentStep lên 1
//     currentStep++;
//
//     // Hiển thị hoặc ẩn các nút back và next dựa trên currentStep
//     if (currentStep === 2) {
//         backBtn.show();
//         nextBtn.show();
//     } else if (currentStep === 3) {
//         backBtn.show();
//         nextBtn.show();
//     } else if (currentStep === 4) {
//         backBtn.hide();
//         nextBtn.hide();
//         finishBtn.show();
//     }
// });
//
// // Bắt sự kiện click cho nút back
// backBtn.on('click', function () {
//     // Giảm currentStep xuống 1
//     currentStep--;
//
//     // Hiển thị hoặc ẩn các nút back và next dựa trên currentStep
//     if (currentStep === 1) {
//         backBtn.hide();
//         nextBtn.show();
//     } else if (currentStep === 2) {
//         backBtn.show();
//         nextBtn.show();
//     } else if (currentStep === 3) {
//         backBtn.show();
//         nextBtn.show();
//         finishBtn.hide();
//     }
// });
$(document).ready(function () {
  // Khởi tạo biến step hiện tại
  var currentStep = 1;

  // Ẩn nút "Back" khi ở step đầu tiên
  $("#btn-back-update").hide();

  // Ẩn nút "Finish" khi không ở step cuối cùng
  $("#btn-finish-update").hide();

  // Xử lý sự kiện khi nhấn nút "Next"
  $("#btn-next-update").click(function () {
    // Kiểm tra xem đã ở step cuối cùng chưa
    if (currentStep < 3) {
      // Hiển thị step tiếp theo
      $("#step" + currentStep).hide();
      currentStep++;
      $("#step" + currentStep).show();

      // Ẩn/hiện các nút "Back", "Next" và "Finish" tương ứng
      if (currentStep === 2) {
        $("#btn-back-update").show();
      } else if (currentStep === 3) {
        $("#btn-next-update").hide();
        $("#btn-finish-update").show();
      }
    }
  });

  // Xử lý sự kiện khi nhấn nút "Back"
  $("#btn-back-update").click(function () {
    // Kiểm tra xem đã ở step đầu tiên chưa
    if (currentStep > 1) {
      // Hiển thị step trước đó
      $("#step" + currentStep).hide();
      currentStep--;
      $("#step" + currentStep).show();

      // Ẩn/hiện các nút "Back", "Next" và "Finish" tương ứng
      if (currentStep === 1) {
        $("#btn-back-update").hide();
      } else if (currentStep === 2) {
        $("#btn-next-update").show();
        $("#btn-finish-update").hide();
      }
    }
  });

  // Xử lý sự kiện khi nhấn nút "Back"
  $("#btn-back-update").click(function () {
    // Kiểm tra xem đã ở step đầu tiên chưa
    if (currentStep > 1) {
      // Hiển thị step trước đó
      $("#step" + currentStep).hide();
      currentStep--;
      $("#step" + currentStep).show();

      // Ẩn/hiện các nút "Back", "Next" và "Finish" tương ứng
      if (currentStep === 1) {
        $("#btn-back").hide();
      } else if (currentStep === 2) {
        $("#btn-next").show();
        $("#btn-finish").hide();
      }
    }
  });

  // Xử lý sự kiện khi nhấn nút "Finish"
  $("#btn-finish-update").click(function () {
    // Lưu ảnh cho từng phòng trước
    uploadOneImage_update();

    const numRooms = parseInt($("#soPhong").val(), 10);
    let uploadPromises = [];
    for (let i = 1; i <= numRooms; i++) {
      uploadPromises.push(uploadListImage_update(i));
    }

    // Khi tất cả ảnh đã được lưu, tiến hành cập nhật dữ liệu vào cơ sở dữ liệu
    Promise.all(uploadPromises).then((responses) => {
      // Lấy dữ liệu từ các trường input của form
      var currentDateTime = new Date();
      var w = $('#ward option:selected').val();
      var d = $('#district option:selected').val() ;
      var p = $('#province option:selected').val() ;
      var urlParams = new URLSearchParams(window.location.search);
      var id = urlParams.get('id') || 1;
      var roomDataList = [];
      responses.forEach((response, index) => {
        const roomData = layThongTinPhong(index + 1);
        roomData.image = response; // Gán ảnh đã được lưu cho phòng
        roomDataList.push(roomData);
      });
console.log(roomDataList);
      var data = preparePostData(roomDataList, id, p, d, w, currentDateTime);

      $.ajax({
        type: "PUT",
        contentType: "application/json; charset=utf-8", // Added charset
        url: "/leo/PostNews/update-post-news",
        data: JSON.stringify(data),
        dataType: "json",
        success: function (response) {
          alert("Sửa bài viết thành công");
          // Chuyển đến trang danh sách bài viết
          window.location.href = "/leo/home";
        },
        error: function (jqXHR, textStatus, errorThrown) {
          // alert("Đã có lỗi xảy ra: " + textStatus + ": " + errorThrown);
          alert("Đã có lỗi xảy ra khi sửa bài viết.");
        }
      });
    }).catch(function (error) {
      // Xử lý lỗi nếu có
      alert("Đã có lỗi xảy ra: " + error);
    });

    return false; // ngăn chặn sự kiện mặc định của phương thức submit()
  });
  function preparePostData(roomDataList, id, p, d, w, currentDateTime) {
    return {
      "idPost": id,
      "name": $("#area-name").val(),
      "idProvince": p,
      "latitude": "20.985961",
      "longitude": "105.798094",
      "idDistrict": d,
      "idWard": w,
      "exactAddress": $("#exact-address").val(),
      "thumbnail": "",
      "phoneNumber": $("#post-phone").val(),
      "phoneZalo": $("#post-zalo").val(),
      "title": $("#post-title").val(),
      "content": $("#post-content").val(),
      "roomDTOList": roomDataList,
      "numberDate": "5",
      "createdTime": currentDateTime,
      "status": "0",
      "idUser": "2",
    };
  }

  function layThongTinPhong(index) {
    var electricService = removeNumberFormatting($("#room-electricService-" + index).val());
    var waterService = removeNumberFormatting($("#room-waterService-" + index).val());
    var rentPrice = removeNumberFormatting($("#room-rentPrice-" + index).val());
    var acreage = removeNumberFormatting($("#room-acreage-" + index).val());
    return {
      "description": $("#room-description-" + index).val(),
      "electricService": electricService,
      "waterService": waterService,
      "rentPrice": rentPrice,
      "acreage": acreage,
      "image": "",
      "video": $("#room-video-" + index).val(),
      "name": $("#room-name-" + index).val(),
    };
  }
});

// ------------step-wizard-------------

//upload video
// document.getElementById("videoUpload").onchange = function (event) {
//   let file = event.target.files[0];
//   let blobURL = URL.createObjectURL(file);
//   document.querySelector("video").style.display = 'block';
//   document.querySelector("video").src = blobURL;
// }
//xem ảnh
function preview(event) {
  var reader = new FileReader();
  reader.onload = function () {
    var preview = document.createElement('img');
    preview.src = reader.result;
    preview.style.maxWidth = "100%";
    preview.style.maxHeight = "200px";
    preview.style.objectFit = "contain";
    preview.style.display = "block";
    preview.style.margin = "0 auto";

    // Thêm sự kiện click vào ảnh
    preview.addEventListener("click", function () {

      // Tạo một modal
      var modal = document.createElement("div");
      modal.style.position = "fixed";
      modal.style.zIndex = "999";
      modal.style.top = "0";
      modal.style.left = "0";
      modal.style.width = "100%";
      modal.style.height = "100%";
      modal.style.overflow = "auto";
      modal.style.backgroundColor = "rgba(0,0,0,0.9)";

      // Tạo ảnh lớn trong modal
      var modalImg = document.createElement("img");
      modalImg.src = this.src;
      modalImg.style.margin = "auto";
      modalImg.style.display = "block";
      modalImg.style.maxWidth = "80%";
      modalImg.style.maxHeight = "80%";
      modalImg.style.position = "absolute";
      modalImg.style.top = "50%";
      modalImg.style.left = "50%";
      modalImg.style.transform = "translate(-50%, -50%)";

      // Thêm nút đóng vào modal
      var closeBtn = document.createElement("span");
      closeBtn.innerHTML = "&times;";
      closeBtn.style.position = "absolute";
      closeBtn.style.top = "15px";
      closeBtn.style.right = "15px";
      closeBtn.style.fontSize = "35px";
      closeBtn.style.color = "#fff";
      closeBtn.style.cursor = "pointer";

      // Thêm sự kiện click vào nút đóng để đóng lại modal
      closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
      });

      // Thêm ảnh lớn và nút đóng vào modal
      modal.appendChild(modalImg);
      modal.appendChild(closeBtn);

      // Thêm modal vào body
      document.body.appendChild(modal);
    });

    var galerias = document.getElementById('galerias');
    galerias.innerHTML = '';
    galerias.appendChild(preview);
  }
  reader.readAsDataURL(event.target.files[0]);
}
function previewMultiple(event, i) {
  var saida = document.getElementById(`images-${i}`);
  var quantos = saida.files.length;
  var galeriaContainer = document.getElementById(`galeria-${i}`);

  // Xóa các ảnh cũ trong galeriaContainer trước khi thêm ảnh mới
  galeriaContainer.innerHTML = "";

  for (var j = 0; j < quantos; j++) {
    var urls = URL.createObjectURL(saida.files[j]);
    var container = document.createElement('div');
    container.className = 'img-container';
    var img = document.createElement('img');
    img.src = urls;

    // Cấu hình CSS trực tiếp vào thẻ img
    img.style.width = '123px';
    img.style.height = '123px';
    img.style.borderRadius = '10px';
    img.style.boxShadow = '0 0 8px rgba(0, 0, 0, 0.2)';
    img.style.opacity = '0.85';

    container.appendChild(img);
    var deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'x';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
    };
    container.appendChild(deleteBtn);
    galeriaContainer.appendChild(container);

    // Thêm sự kiện click vào ảnh (giữ nguyên phần JavaScript này)
    img.addEventListener("click", function () {
      // Tạo một modal
      var modal = document.createElement("div");
      modal.style.position = "fixed";
      modal.style.zIndex = "999";
      modal.style.top = "0";
      modal.style.left = "0";
      modal.style.width = "100%";
      modal.style.height = "100%";
      modal.style.overflow = "auto";
      modal.style.backgroundColor = "rgba(0,0,0,0.9)";

      // Tạo ảnh lớn trong modal
      var modalImg = document.createElement("img");
      modalImg.src = this.src;
      modalImg.style.margin = "auto";
      modalImg.style.display = "block";
      modalImg.style.maxWidth = "80%";
      modalImg.style.maxHeight = "80%";
      modalImg.style.position = "absolute";
      modalImg.style.top = "50%";
      modalImg.style.left = "50%";
      modalImg.style.transform = "translate(-50%, -50%)";

      // Thêm nút đóng vào modal
      var closeBtn = document.createElement("span");
      closeBtn.innerHTML = "&times;";
      closeBtn.style.position = "absolute";
      closeBtn.style.top = "15px";
      closeBtn.style.right = "15px";
      closeBtn.style.fontSize = "35px";
      closeBtn.style.color = "#fff";
      closeBtn.style.cursor = "pointer";

      // Thêm sự kiện click vào nút đóng để đóng lại modal
      closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
      });

      // Thêm ảnh lớn và nút đóng vào modal
      modal.appendChild(modalImg);
      modal.appendChild(closeBtn);

      // Thêm modal vào body
      document.body.appendChild(modal);
    });
  }
}


// function previewMultiple(event,i) {
//   var element = document.getElementById("imageRoomre-"+i);
//   if (element != null) {
//     element.parentNode.removeChild(element);
//   }
//   var saida = document.getElementById("images-"+i);
//   var quantos = saida.files.length;
//   for (i = 0; i < quantos; i++) {
//     var urls = URL.createObjectURL(event.target.files[i]);
//     var container = document.createElement('div');
//     container.className = 'img-container';
//     var img = document.createElement('img');
//     img.src = urls;
//     container.appendChild(img);
//     var deleteBtn = document.createElement('button');
//     deleteBtn.innerHTML = 'x';
//     deleteBtn.className = 'delete-btn';
//     deleteBtn.onclick = function () {
//       this.parentNode.parentNode.removeChild(this.parentNode);
//     };
//     container.appendChild(deleteBtn);
//     document.getElementById("galeria-"+i).appendChild(container);
//     // Thêm sự kiện click vào ảnh
//     img.addEventListener("click", function () {
//       // Tạo một modal
//       var modal = document.createElement("div");
//       modal.style.position = "fixed";
//       modal.style.zIndex = "999";
//       modal.style.top = "0";
//       modal.style.left = "0";
//       modal.style.width = "100%";
//       modal.style.height = "100%";
//       modal.style.overflow = "auto";
//       modal.style.backgroundColor = "rgba(0,0,0,0.9)";
//
//       // Tạo ảnh lớn trong modal
//       var modalImg = document.createElement("img");
//       modalImg.src = this.src;
//       modalImg.style.margin = "auto";
//       modalImg.style.display = "block";
//       modalImg.style.maxWidth = "80%";
//       modalImg.style.maxHeight = "80%";
//       modalImg.style.position = "absolute";
//       modalImg.style.top = "50%";
//       modalImg.style.left = "50%";
//       modalImg.style.transform = "translate(-50%, -50%)";
//
//       // Thêm nút đóng vào modal
//       var closeBtn = document.createElement("span");
//       closeBtn.innerHTML = "&times;";
//       closeBtn.style.position = "absolute";
//       closeBtn.style.top = "15px";
//       closeBtn.style.right = "15px";
//       closeBtn.style.fontSize = "35px";
//       closeBtn.style.color = "#fff";
//       closeBtn.style.cursor = "pointer";
//
//       // Thêm sự kiện click vào nút đóng để đóng lại modal
//       closeBtn.addEventListener("click", function () {
//         modal.style.display = "none";
//       });
//
//       // Thêm ảnh lớn và nút đóng vào modal
//       modal.appendChild(modalImg);
//       modal.appendChild(closeBtn);
//
//       // Thêm modal vào body
//       document.body.appendChild(modal);
//     });
//   }
// }

//up ảnh lên driver
// function uploadImage(image) {
//   // let formData = new FormData($(this)[0]);
//   let formData = new FormData();
//   let files = $(`${image}`)[0].files;
//   for (let i = 0; i < files.length; i++) {
//     formData.append('files', files[i]);
//   }
//   $.ajax({
//     url: '/leo/upImage/file-on-google-drive',
//     type: "POST",
//     data: formData,
//     processData: false,
//     contentType: false,
//     success: function (response) {
//       console.log(response)
//     },
//     error: function (xhr, status, error) {
//       $('#message').html(
//           '<div class="alert alert-danger" role="alert">' + error
//           + '</div>');
//     }
//   })
// }
function uploadOneImage_save() {
  let formData = new FormData();
  // Tạo FormData cho hình ảnh đơn lẻ
  let file = $('#image')[0].files[0];
  if (!file) {
    alert('Vui lòng chọn ảnh cho bài đăng');
    return;
  }
  formData.append('file', file);
  // Gửi Ajax với FormData lớn chứa cả hai FormData ở trên
  $.ajax({
    url: '/leo/upImage/one-file-on-google-drive',
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    success: function (response) {
    },
    error: function (xhr, status, error) {
      $('#message').html(
          '<div class="alert alert-danger" role="alert">' + error
          + '</div>');
    }
  })
}
function uploadListImage_save(i) {
  let listFiles = $('#images-' + i)[0].files;
  if (listFiles.length === 0) {
    alert("Vui lòng chọn ít nhất một ảnh phòng.");
    return;
  }
  // Tạo FormData cho danh sách hình ảnh
  let formData = new FormData();
  for (let j = 0; j < listFiles.length; j++) {
    formData.append('listFiles', listFiles[j]);
  }

  // Thêm thông tin roomIndex vào formData
  formData.append('roomIndex', i);

  $.ajax({
    type: "POST",
    url: '/leo/upImage/list-file-on-google-drive',
    data: formData,
    processData: false,
    contentType: false,
    success: function (response) {
      console.log(response); // In ra phản hồi từ máy chủ
    },
    error: function (xhr, status, error) {
      $('#message').html(
          '<div class="alert alert-danger" role="alert">' + error
          + '</div>');
    }
  });
}

// function uploadListImage_save(i) {
//   let listFiles = $('#images-' + i)[0].files;
//   if (listFiles.length === 0) {
//     alert("Vui lòng chọn ít nhất một ảnh phòng.");
//     return;
//   }
//   // Tạo FormData cho danh sách hình ảnh
//   let formData = new FormData();
//   for (let j = 0; j < listFiles.length; j++) {
//     formData.append('listFiles', listFiles[j]);
//   }
//
//   // Thêm thông tin roomIndex vào formData
//   formData.append('roomIndex', i);
//
//   $.ajax({
//     type: "POST",
//     url: '/leo/upImage/list-file-on-google-drive',
//     data: formData,
//     processData: false,
//     contentType: false,
//     success: function (response) {
//       console.log(response); // In ra phản hồi từ máy chủ
//     },
//     error: function (xhr, status, error) {
//       $('#message').html(
//           '<div class="alert alert-danger" role="alert">' + error
//           + '</div>');
//     }
//   });
// }

//update

function uploadOneImage_update() {
  let formData = new FormData();
  // Tạo FormData cho hình ảnh đơn lẻ
  let file = $('#image')[0].files[0];
  if (!file) {
    return;
  }
  formData.append('file', file);
  // Gửi Ajax với FormData lớn chứa cả hai FormData ở trên
  $.ajax({
    type: "POST",
    url: '/leo/upImage/one-file-on-google-drive',
    data: formData,
    processData: false,
    contentType: false,
    success: function (response) {
    },
    error: function (xhr, status, error) {
      $('#message').html(
          '<div class="alert alert-danger" role="alert">' + error
          + '</div>');
    }
  })
}

function uploadListImage_update(i) {
  let listFiles = document.getElementById('images-' + i).files;

  // Tạo FormData cho danh sách hình ảnh
  let formData = new FormData();
  for (let j = 0; j < listFiles.length; j++) {
    formData.append('listFiles', listFiles[j]);
  }

  // Thêm thông tin roomIndex vào formData
  formData.append('roomIndex', i);

  $.ajax({
    type: "POST",
    url: '/leo/upImage/list-file-on-google-drive',
    data: formData,
    processData: false,
    contentType: false,
    success: function (response) {
      console.log(response); // In ra phản hồi từ máy chủ
    },
    error: function (xhr, status, error) {
      $('#message').html(
          '<div class="alert alert-danger" role="alert">' + error
          + '</div>');
    }
  });
}


// function previewMultiple(event) {
//   var saida = document.getElementById("images");
//   var quantos = saida.files.length;
//   for (i = 0; i < quantos; i++) {
//     var urls = URL.createObjectURL(event.target.files[i]);
//     var container = document.createElement('div');
//     container.className = 'img-container';
//     var img = document.createElement('img');
//     img.src = urls;
//     container.appendChild(img);
//     var deleteBtn = document.createElement('button');
//     deleteBtn.innerHTML = 'x';
//     deleteBtn.className = 'delete-btn';
//     deleteBtn.onclick = function () {
//       this.parentNode.parentNode.removeChild(this.parentNode);
//     };
//     container.appendChild(deleteBtn);
//     document.getElementById("galeria").appendChild(container);
//
//   }
// }

// $(document).ready(function() {
//     $('#post-news').validate({
//         rules: {
//             name: {
//                 required: true
//             },
//             description: {
//                 required: true,
//                 minlength: 30,
//                 maxlength: 500
//             }
//         },
//         messages: {
//             name: {
//                 required: "Vui lòng nhập tiêu đề"
//             },
//             description: {
//                 required: "Vui lòng nhập mô tả",
//                 minlength: "Mô tả quá ngắn",
//                 maxlength: "Mô tả quá dài"
//             }
//         }
//     });
// });
// document.getElementById('province').addEventListener('change', updateMap);
// document.getElementById('district').addEventListener('change', updateMap);
document.getElementById('ward').addEventListener('change', updateMap);
document.getElementById('exact-address').addEventListener('keyup',
    function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        updateMap();
      }
    });

// Hàm cập nhật vị trí của bản đồ
function updateMap() {
  var mapProp = {
    center: new google.maps.LatLng(20.987130, 105.797315),
    zoom: 8,
  };
  var map = new google.maps.Map(document.getElementById("map"), mapProp);

  // Lấy giá trị từ các phần tử
  // var province = document.getElementById('province').selectedOptions[0].text;
  // var district = document.getElementById('district').selectedOptions[0].text;
  // var ward = document.getElementById('ward').selectedOptions[0].text;
  var province = $('#province option:selected').text();
  var district = $('#district option:selected').text();
  var ward = $('#ward option:selected').text();
  // Tạo chuỗi địa chỉ để truy vấn API Google Maps
  if (province === 'Vui lòng chọn thành phố/Tỉnh thành') {
    province = '01';
  }
  var address = [ward, district, province].filter(Boolean).join(', ');
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({'address': address},
      function (results, status) {
        if (status === 'OK') {
          // Cập nhật vị trí của bản đồ
          var map = new google.maps.Map(document.getElementById('map'),
              {
                center: results[0].geometry.location,
                zoom: 16
              });
          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
          });
        } else {
          //  alert(address + ' :Không tìm thấy địa chỉ!');
        }
      });
}

$(document).ready(function () {
  $.ajax({
    url: "/leo/PostNews/province",
    type: "GET",
    success: function (response) {
      console.log("Success get province!");
      $.each(response, function (index, option) {
        $("#province").append(
            "<option value='" + option.id + "'>" + option.name + "</option>");
      });
      $("#province").parent().find(".dropdown-toggle").dropdown("update");
    },
    error: function (xhr, status, error) {
      console.log("Error: " + error);
    }
  });
  });


$(document).ready(function () {
  // Hàm hiển thị các Quận/Huyện và Xã/Phường
  function showDistrictsAndWards(districtId, wardId) {
    // Xóa các option cũ trong #district và #ward
    $("#district").empty();
    $("#ward").empty();

    // Gọi API để lấy danh sách các Quận/Huyện
    $.ajax({
      url: "/leo/PostNews/district",
      type: "GET",
      success: function (districts) {
        // Thêm các Quận/Huyện vào thẻ select #district
        $.each(districts, function (index, district) {
          $("#district").append(
              "<option value='" + district.id + "'>" + district.name + "</option>"
          );
        });
        $("#district").val(districtId); // Hiển thị giá trị đã được truyền vào

        // Kiểm tra xem districtId có giá trị hợp lệ không trước khi gọi API "/leo/PostNews/ward/"
        if (districtId) {
          // Gọi API để lấy danh sách các Xã/Phường tương ứng với idDistrict
          $.ajax({
            url: "/leo/PostNews/ward/" + districtId,
            type: "GET",
            success: function (wards) {
              // Thêm các Xã/Phường vào thẻ select #ward
              $.each(wards, function (index, ward) {
                $("#ward").append(
                    "<option value='" + ward.id + "'>" + ward.name + "</option>"
                );
              });
              $("#ward").val(wardId); // Hiển thị giá trị đã được truyền vào
            },
            error: function (xhr, status, error) {
              console.log("Error: " + error);
            }
          });
        }
      },
      error: function (xhr, status, error) {
        console.log("Error: " + error);
      }
    });
  }

  // Lấy giá trị idDistrict và idWard từ option đã được chọn mặc định
  var districtId = $("#district").val();
  var wardId = $("#ward").val();

  // Gọi hàm để hiển thị các Quận/Huyện và Xã/Phường
  showDistrictsAndWards(districtId, wardId);

  // Xử lý sự kiện khi thay đổi giá trị của #district
  $("#district").change(function () {
    var selectedOption = $(this).val();

    // Gọi hàm để hiển thị các Xã/Phường tương ứng với giá trị mới của #district
    showDistrictsAndWards(selectedOption, null);
  });
});

function formatNumber(input) {
  // Loại bỏ tất cả các ký tự không phải số và dấu phân cách
  var valueWithoutCommas = input.value.replace(/[^\d]/g, '');

  // Kiểm tra giá trị nhập vào nếu không phải số hợp lệ, không cập nhật gì cả
  if (isNaN(valueWithoutCommas)) {
    return;
  }

  // Đảo ngược chuỗi giá trị
  var reversedValue = valueWithoutCommas.split('').reverse().join('');

  // Thêm dấu phân cách vào sau mỗi 3 chữ số
  var formattedValue = "";
  for (var i = 0; i < reversedValue.length; i++) {
    if (i > 0 && i % 3 === 0) {
      formattedValue += ",";
    }
    formattedValue += reversedValue.charAt(i);
  }

  // Đảo ngược lại chuỗi giá trị đã định dạng, thêm chữ "VND" và cập nhật vào trường nhập liệu
  input.value = formattedValue.split('').reverse().join('');
}


function formatPhoneNumber(input) {
  // Loại bỏ tất cả các ký tự không phải số và dấu "+"
  var phoneNumber = input.value.replace(/[^\d+]/g, '');

  // Kiểm tra nếu số điện thoại bắt đầu bằng "+" và chỉ cho phép một dấu "+"
  if (phoneNumber.startsWith("+")) {
    phoneNumber = "+" + phoneNumber.replace(/\+/g, '');
  }

  // Kiểm tra nếu số điện thoại vượt quá 12 ký tự thì hạn chế nhập thêm
  if (phoneNumber.length > 12) {
    phoneNumber = phoneNumber.slice(0, 12);
  }

  // Kiểm tra số điện thoại có dấu "+" thì không thêm dấu phân cách, ngược lại thêm dấu phân cách vào sau mỗi 3 chữ số
  var formattedPhoneNumber = "";
  if (phoneNumber.startsWith("+")) {
    formattedPhoneNumber = phoneNumber;
  } else {
    for (var i = 0; i < phoneNumber.length; i++) {
      if (i > 0 && i % 3 === 0) {
        formattedPhoneNumber += " ";
      }
      formattedPhoneNumber += phoneNumber.charAt(i);
    }
  }

  // Cập nhật giá trị đã định dạng vào trường nhập liệu
  input.value = formattedPhoneNumber;
}
function removeNumberFormatting(inputValue) {
  if (inputValue.length < 3) {
    return inputValue;
  }

  // Loại bỏ tất cả các dấu phân cách ","
  return inputValue.replace(/,/g, '');
}
function removePhoneNumber(input) {
  if (typeof input === "undefined") {
    return "";
  }
  var phoneNumber = input.replace(/\s/g, '');

  // Kiểm tra nếu số điện thoại không bắt đầu bằng "+" và có đúng định dạng "000 000" hoặc "00 000 000 000" thì thực hiện loại bỏ dấu phân cách
  if (!phoneNumber.startsWith("+") && (phoneNumber.length === 9 || phoneNumber.length === 12)) {
    phoneNumber = phoneNumber.substring(0, 3) + phoneNumber.substring(4, 7) + phoneNumber.substring(7);
  }
  console.log("phone: "+input+":"+phoneNumber);
  return phoneNumber;
}
