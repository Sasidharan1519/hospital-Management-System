function login(){

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    if(username === "admin" &&
       password === "admin123"){

        alert("Login Successful");

        window.location.href =
        "dashboard.html";

        return false;
    }

    else{

        alert("Invalid Username or Password");

        return false;
    }
}
function bookAppointment(){

    let patientName =
    document.getElementById("patientName").value;

    let doctorAssigned =
    document.getElementById("doctorAssigned").value;

    let appointmentDate =
    document.getElementById("appointmentDate").value;

    if(patientName=="" ||
       doctorAssigned=="" ||
       appointmentDate==""){

       alert("Fill all fields");
       return;
    }

    let table =
    document.getElementById("appointmentTable");

    let row =
    table.insertRow();

    row.insertCell(0).innerHTML =
    patientName;

    row.insertCell(1).innerHTML =
    doctorAssigned;

    row.insertCell(2).innerHTML =
    appointmentDate;

    alert("Appointment Booked Successfully");
}

function calculateBill(){

    let consultationFee =
    parseInt(document.getElementById("consultationFee").value) || 0;

    let medicineFee =
    parseInt(document.getElementById("medicineFee").value) || 0;

    let total =
    consultationFee + medicineFee;

    document.getElementById("totalBill").innerHTML =
    "Total Bill: Rs. " + total;
}