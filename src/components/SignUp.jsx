import  { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SignUp() {
  const [referralCode, setReferralCode] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Extract referralCode from query parameters
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("referralCode");
    if (code) {
      setReferralCode(code); // Set the referral code state
    }
  }, [location]);

  return (
    <div>
      <h1>Sign Up</h1>
      {referralCode && <p>Referral Code: {referralCode}</p>}
      <form>
        <label>
          Referral Code
          <input
            type="text"
            value={referralCode || ""}
            onChange={(e) => setReferralCode(e.target.value)}
            disabled
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
