const express=require("express");
const path=require("path");
const nodemailer=require("nodemailer");

const app=express();
const port = process.env.PORT || 1000;

app.set("view engine","ejs");
app.set("views",path.resolve("views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/',(req,res)=>{
    return res.render("index");
});


app.post("/Sendmail", (req, res) => {
  const { fullname, email, Messages } = req.body; // Removed Mobile
  console.log("Form Data Received:", req.body); // Log form data

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: "keyurbhure655@gmail.com",
      pass: "poru yjzf kcnm zdzz",
    },
  });

  const mailOptions = {
      from: '"Contact Form" <keyurbhure655@gmail.com>', // Authenticated sender
      replyTo: `"${fullname}" <${email}>`, // Reply to submitter
      to: "keyurbhure655@gmail.com",
      subject: "New Message from Contact Form",
      text: `Name: ${fullname}\nEmail: ${email}\nMessage: ${Messages}`, // Removed Mobile
  };

  transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
          console.error("Email Send Error:", error); // Detailed error log
      } else {
          console.log("Email Sent:", info.response);
      }
      res.redirect("/");
  });
});


app.listen(port,()=>console.log(`Server started at port:${port}`));