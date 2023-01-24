const otpGenerator = require("otp-generator");
const otpType = require("../Util/Otpconfig.js");
function generateOtp() {
  const otp = otpGenerator.generate(otpType.OTP_LENGTH, otpType.OTP_CONFIG);
  return otp;
}
module.exports = { generateOtp };