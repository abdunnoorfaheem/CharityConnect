document.getElementById("donateFeni").addEventListener("click", function(event) {


    event.preventDefault();


    let addMoneyFeni = inputNumber("inputFeni");

    let previousMoneyFeni = textValue("idFeniShow");


    let sumOfMoneyFeni = (previousMoneyFeni + addMoneyFeni);


    document.getElementById("idFeniShow").innerText = sumOfMoneyFeni;


    let topDonation = document.getElementById("top-donation-id").innerText;

    let topDonationNumber = parseFloat(topDonation);




    let donationUse = (topDonationNumber - addMoneyFeni);


    document.getElementById("top-donation-id").innerText = donationUse;




    let para = document.createElement("p");
    let date = new Date();
    para.innerText = `Add money: ${addMoneyFeni} total Balance: ${sumOfMoneyFeni} Date:  ${date.toLocaleString()}`;


    let id = document.getElementById("sec").appendChild(pera);

    console.log(para);

    console.log(id);










})