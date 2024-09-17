import {
  APP_NAME,
  CURRENT_YEAR,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  TWITTER_URL,
  LINKEDIN_URL,
} from "@/config";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        textAlign: "center",
        borderTop: "1px solid #e7e7e7",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Link
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener"
          sx={{ mx: 1 }}
        >
          {/* <InstagramIcon /> */}
        </Link>
        <Link href={FACEBOOK_URL} target="_blank" rel="noopener" sx={{ mx: 1 }}>
          {/* <FacebookIcon /> */}
        </Link>
        <Link href={TWITTER_URL} target="_blank" rel="noopener" sx={{ mx: 1 }}>
          {/* <TwitterIcon /> */}
        </Link>
        <Link href={LINKEDIN_URL} target="_blank" rel="noopener" sx={{ mx: 1 }}>
          {/* <LinkedInIcon /> */}
        </Link>
      </Box>
      <Box sx={{ mb: 2 }}>
        <p>
          © {CURRENT_YEAR} {APP_NAME}. All rights reserved.
        </p>
      </Box>
    </Box>
  );
}
