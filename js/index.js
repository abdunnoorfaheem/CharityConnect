document.getElementById("donate-noa").addEventListener("click", function(event) {

    event.preventDefault();


    let addMoney = inputNumber("inputDonateNoa");

    let previousMoney = textValue("idNoaOutput");


    let sumDonation = (previousMoney + addMoney);


    document.getElementById("idNoaOutput").innerText = sumDonation;



    // top-donation-id


    let topDonationRecords = textValue("top-donation-id");

    let records = (topDonationRecords - addMoney);




    document.getElementById("top-donation-id").innerText = records;


    document.getElementById("inputDonateNoa").value = "";


    //transaction


    let p = document.createElement("p");
    let date = new Date();
    p.innerText = `Add Money : ${addMoney} New  Balance is ${sumDonation} Date: ${date.toLocaleString()}`;


    let find = document.getElementById("main-id");
    console.log(find.innerText);


























});