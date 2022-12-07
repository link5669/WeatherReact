import { Stack, Typography } from "@mui/material";
import { Logo } from "./Logo";

/**
 * Header Component
 *
 * [Stack Documentation](https://mui.com/material-ui/react-stack/) |
 * [Typography Documentation](https://mui.com/material-ui/react-typography/) |
 * [Logo Component](logo.jsx)
 *
 * @param title: string
 * @param subtitle: string
 */
export const Header = ({ title, subtitle }) => {
  return (
    <>
      <Stack direction="row" justifyContent="center" mt={10}>
        <Stack direction="column" alignItems="center">
          <Logo url="https://avatars.githubusercontent.com/u/60403571" />
          <Typography variant="h2" fontWeight={500}>
            {title}
          </Typography>
          <Typography variant="subtitle1">{subtitle}</Typography>
        </Stack>
      </Stack>
    </>
  );
};
