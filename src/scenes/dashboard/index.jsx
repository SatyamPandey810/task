import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Index from "../orders/Index";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        {/* //////////////////total orders */}
        <Box
          gridColumn={{ xs: "span 12", sm: "span 3" }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          sx={{
            padding: { xs: "10px", sm: "20px" }, // Padding adjustments
            borderRadius: "8px",
            boxSizing: "border-box",
            width: "100%",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              padding: { xs: "8px", sm: "10px" },
              borderRadius: "8px",
            }}
          >
            <Box sx={{ position: "relative", display: "inline-block" }}>
              <Box
                sx={{
                  backgroundColor: "rgba(0, 18, 213, 0.21)",
                  borderRadius: "10%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ShoppingBagIcon
                  sx={{ color: colors.greenAccent[600], fontSize: { xs: "20px", sm: "24px" } }}
                />
              </Box>
            </Box>

            <Box mt={1} textAlign="center">
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "12px", sm: "14px" },
                  color: colors.grey[100],
                }}
              >
                Total Orders
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px", // Adjust gap for mobile
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "16px", sm: "20px" },
                    color: colors.grey[300],
                    fontWeight: "bold",
                  }}
                >
                  75
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{ color: colors.greenAccent[500], marginLeft: "8px" }}
                >
                  <ArrowUpwardIcon sx={{ fontSize: "16px" }} />
                  <Typography sx={{ fontSize: "14px", marginLeft: "2px" }}>2%</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* /////////////////////////// Total Delivered */}
        <Box
          gridColumn={{ xs: "span 12", sm: "span 3" }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          sx={{
            padding: { xs: "10px", sm: "20px" },
            borderRadius: "8px",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              padding: { xs: "8px", sm: "10px" },
              borderRadius: "8px",
            }}
          >
            <Box sx={{ position: "relative", display: "inline-block" }}>
              <Box
                sx={{
                  backgroundColor: "rgba(0, 128, 0, 0.2)",
                  borderRadius: "10%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ShoppingBagIcon
                  sx={{ color: colors.greenAccent[600], fontSize: { xs: "20px", sm: "24px" } }}
                />
              </Box>
              <CheckCircleIcon
                sx={{
                  color: colors.blueAccent[500],
                  fontSize: "15px",
                  position: "absolute",
                  bottom: -4,
                  left: "73%",
                  transform: "translateX(-50%)",
                  borderRadius: "50%",
                  boxShadow: "0px 0px 4px rgba(0,0,0,0.1)",
                }}
              />
            </Box>

            <Box mt={1} display="flex" justifyContent="space-between" width="100%">
              <Box textAlign="center">
                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: "12px", sm: "14px" }, color: colors.grey[100] }}
                >
                  Total Delivered
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: "16px", sm: "20px" },
                      color: colors.grey[300],
                      fontWeight: "bold",
                    }}
                  >
                    75
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{ color: colors.redAccent[500], marginLeft: "8px" }}
                  >
                    <ArrowDownwardIcon sx={{ fontSize: "16px" }} />
                    <Typography sx={{ fontSize: "14px", marginLeft: "2px" }}>2%</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* /////////////////////////// Total Cancelled */}
        <Box
          gridColumn={{ xs: "span 12", sm: "span 3" }}  // Full width on mobile, 1/3 on larger screens
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          sx={{
            padding: { xs: "10px", sm: "20px" },
            borderRadius: "8px",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              padding: { xs: "8px", sm: "10px" },
              borderRadius: "8px",
            }}
          >
            <Box sx={{ position: "relative", display: "inline-block" }}>
              <Box
                sx={{
                  backgroundColor: "rgba(255, 0, 0, 0.2)",
                  borderRadius: "10%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ShoppingBagIcon
                  sx={{ color: colors.redAccent[600], fontSize: { xs: "20px", sm: "24px" } }}
                />
              </Box>
              <CancelOutlinedIcon
                sx={{
                  color: colors.redAccent[600],
                  fontSize: "15px",
                  position: "absolute",
                  bottom: -4,
                  left: "73%",
                  transform: "translateX(-50%)",
                  borderRadius: "50%",
                  boxShadow: "0px 0px 4px rgba(0,0,0,0.1)",
                }}
              />
            </Box>

            <Box mt={1} display="flex" justifyContent="space-between" width="100%">
              <Box textAlign="center">
                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: "12px", sm: "14px" }, color: colors.grey[100] }}
                >
                  Total Cancelled
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: "16px", sm: "20px" },
                      color: colors.grey[300],
                      fontWeight: "bold",
                    }}
                  >
                    05
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{ color: colors.greenAccent[500], marginLeft: "8px" }}
                  >
                    <ArrowUpwardIcon sx={{ fontSize: "16px" }} />
                    <Typography sx={{ fontSize: "14px", marginLeft: "2px" }}>3%</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* /////////////////////////// Total Revenue */}
        <Box
          gridColumn={{ xs: "span 12", sm: "span 3" }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          sx={{
            padding: { xs: "10px", sm: "20px" },
            borderRadius: "8px",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              padding: { xs: "8px", sm: "10px" },
              borderRadius: "8px",
            }}
          >
            <Box sx={{ position: "relative", display: "inline-block" }}>
              <Box
                sx={{
                  backgroundColor: "rgb(210 57 57 / 20%)",
                  borderRadius: "10%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AttachMoneyIcon
                  sx={{ color: colors.greenAccent[600], fontSize: { xs: "20px", sm: "24px" } }}
                />
              </Box>
            </Box>

            <Box mt={1} display="flex" justifyContent="space-between" width="100%">
              <Box textAlign="center">
                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: "12px", sm: "14px" }, color: colors.grey[100] }}
                >
                  Total Revenue
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: "16px", sm: "20px" },
                      color: colors.grey[300],
                      fontWeight: "bold",
                    }}
                  >
                    $12k
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{ color: colors.redAccent[500], marginLeft: "8px" }}
                  >
                    <ArrowDownwardIcon sx={{ fontSize: "16px" }} />
                    <Typography sx={{ fontSize: "14px", marginLeft: "2px" }}>3%</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>


        <Box
          gridColumn={{ xs: "span 12", sm: "span 8", md: "span 8" }}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h2"
                fontWeight="bold"
                color={colors.grey[100]}
              >
                Activity
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn={{ xs: "span 12", sm: "span 8", md: "span 4" }}
          // gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>


          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <Box
                backgroundColor="#ad3737c4"
                p="5px 5px"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                marginRight="10px"
              >
                <GpsFixedIcon
                  sx={{
                    color: "red",
                    fontSize: { xs: '20px', sm: '24px' },
                  }}
                />
              </Box>
              <Typography color={colors.grey[100]}>
                Goals
              </Typography>
            </Box>

            <Box
              backgroundColor="#0000007a"
              p="5px 5px"
              borderRadius="50%"
              display="flex"
              alignItems="center"
            >

              <ChevronRightIcon
                sx={{
                  color: "#ffff",
                  fontSize: { xs: '20px', sm: '24px' },

                }}
              />
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <Box
                backgroundColor="rgba(0, 18, 213, 0.21)"
                p="5px 5px"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                marginRight="10px"
              >
                <FastfoodIcon
                  sx={{
                    color: "#c8bdbd",
                    fontSize: { xs: '20px', sm: '24px' },
                  }}
                />
              </Box>
              <Typography color={colors.grey[100]}>
                Papular Dishes
              </Typography>
            </Box>

            <Box
              backgroundColor="#0000007a"
              p="5px 5px"
              borderRadius="50%"
              display="flex"
              alignItems="center"
            >

              <ChevronRightIcon
                sx={{
                  color: "#ffff",
                  fontSize: { xs: '20px', sm: '24px' },

                }}
              />
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <Box
                backgroundColor="rgba(0, 128, 0, 0.2)"
                p="5px 5px"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                marginRight="10px"
              >
                < LocalDiningIcon
                  sx={{
                    color: "#c8bdbd",
                    fontSize: { xs: '20px', sm: '24px' },
                  }}
                />
              </Box>
              <Typography color={colors.grey[100]}>
                Menus
              </Typography>
            </Box>

            <Box
              backgroundColor="#0000007a"
              p="5px 5px"
              borderRadius="50%"
              display="flex"
              alignItems="center"
            >

              <ChevronRightIcon
                sx={{
                  color: "#ffff",
                  fontSize: { xs: '20px', sm: '24px' },

                }}
              />
            </Box>
          </Box>

        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn={{ xs: "span 12", sm: "span 8", md: "span 8" }}
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Recent Orders
          </Typography>
          <Index />
        </Box>



        <Box
          gridColumn={{ xs: "span 12", sm: "span 8", md: "span 4" }}
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Customer Feedback
          </Typography>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                paddingBottom: "15px",
                marginBottom: "15px",
                borderBottom: `1px solid ${colors.grey[700]}`,
              }}
            >

              <Box
                component="img"
                src={`../../assets/t4.jpg`}
                alt="Customer"
                sx={{
                  width: 35,
                  height: 35,
                  borderRadius: "50%",
                  marginRight: "15px",
                }}
              />
              <Box>
                <Typography variant="h6" fontWeight="bold" sx={{ color: colors.grey[100] }}>
                  Jenny Wilson
                </Typography>
                <Typography variant="body2" sx={{ color: colors.grey[300] }}>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugit laborum, excepturi vitae"
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                paddingBottom: "15px",
                marginBottom: "15px",
                borderBottom: `1px solid ${colors.grey[700]}`,
              }}
            >
              <Box
                component="img"
                src={`../../assets/t2.jpg`}
                alt="Customer"
                sx={{
                  width: 35,
                  height: 35,
                  borderRadius: "50%",
                  marginRight: "15px",
                }}
              />
              <Box>
                <Typography variant="h6" fontWeight="bold" sx={{ color: colors.grey[100] }}>
                  Guy Hawkins
                </Typography>
                <Typography variant="body2" sx={{ color: colors.grey[300] }}>
                  "Loved the ambiance and the staff was super friendly. Highly recommend!"
                </Typography>
              </Box>
            </Box>
          
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                paddingBottom: "15px",
                marginBottom: "15px",
                borderBottom: `1px solid ${colors.grey[700]}`,
              }}
            >
              <Box
                component="img"
                src={`../../assets/client.jpg`}
                alt="Customer"
                sx={{
                  width: 35,
                  height: 35,
                  borderRadius: "50%",
                  marginRight: "15px",
                }}
              />
              <Box>
                <Typography variant="h6" fontWeight="bold" sx={{ color: colors.grey[100] }}>
                  Dianne Russell
                </Typography>
                <Typography variant="body2" sx={{ color: colors.grey[300] }}>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugit laborum, excepturi vitae"
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default Dashboard;
