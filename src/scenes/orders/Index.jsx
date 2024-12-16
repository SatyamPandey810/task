import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,  Box, Typography } from '@mui/material';

function Index() {
    
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Customer</TableCell>
                        <TableCell>Order No.</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Box
                                    component="img"
                                    src={`../../assets/client.jpg`}
                                    alt="Customer"
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: "50%",
                                        marginRight: "10px",
                                    }}
                                />
                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                    Wade Warren
                                </Typography>
                            </Box>
                        </TableCell>
                        <TableCell>12343877</TableCell>
                        <TableCell>$124.00</TableCell>
                        <TableCell
                            sx={{
                                fontSize: { xs: "10px", sm: "12px" },
                                color: "#FFFFFF",
                            }}
                        >
                            <Box sx={{ position: "relative", display: "inline-block" }}>
                                <Box
                                    sx={{
                                        backgroundColor: "rgba(0, 128, 0, 0.2)",
                                        borderRadius: "30px",
                                        width: "100%",
                                        padding: "6px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    Delivered
                                </Box>
                            </Box>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Box
                                    component="img"
                                    src={`../../assets/t2.jpg`}
                                    alt="Customer"
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: "50%",
                                        marginRight: "10px",
                                    }}
                                />
                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                    Jane Cooper
                                </Typography>
                            </Box>
                        </TableCell>
                        <TableCell>764578</TableCell>
                        <TableCell>$304.00</TableCell>
                        <TableCell
                            sx={{
                                fontSize: { xs: "10px", sm: "12px" },
                                color: "#FFFFFF",
                            }}
                        >
                            <Box sx={{ position: "relative", display: "inline-block" }}>
                                <Box
                                    sx={{
                                        backgroundColor: "rgba(0, 128, 0, 0.2)",
                                        borderRadius: "30px",
                                        width: "100%",
                                        padding: "6px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    Delivered
                                </Box>
                            </Box>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Box
                                    component="img"
                                    src={`../../assets/t3.jpg`}
                                    alt="Customer"
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: "50%",
                                        marginRight: "10px",
                                    }}
                                />
                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                    Guy Hawkins
                                </Typography>
                            </Box>
                        </TableCell>
                        <TableCell>764578</TableCell>
                        <TableCell>$304.00</TableCell>
                        <TableCell
                            sx={{
                                fontSize: { xs: "10px", sm: "12px" },
                                color: "#FFFFFF",
                            }}
                        >
                            <Box sx={{ position: "relative", display: "inline-block" }}>
                                <Box
                                    sx={{
                                        backgroundColor: "rgba(128, 0, 0, 0.2)",
                                        borderRadius: "30px",
                                        width: "100%",
                                        padding: "6px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    Cancelled
                                </Box>
                            </Box>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Box
                                    component="img"
                                    src={`../../assets/t4.jpg`}
                                    alt="Customer"
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: "50%",
                                        marginRight: "10px",
                                    }}
                                />
                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                    Kristin Waston
                                </Typography>
                            </Box>
                        </TableCell>
                        <TableCell>2088767</TableCell>
                        <TableCell>$104.00</TableCell>
                        <TableCell
                            sx={{
                                fontSize: { xs: "10px", sm: "12px" },
                                color: "#FFFFFF",
                            }}
                        >
                            <Box sx={{ position: "relative", display: "inline-block" }}>
                                <Box
                                    sx={{
                                        backgroundColor: "rgba(128, 0, 0, 0.2)",
                                        borderRadius: "30px",
                                        width: "100%",
                                        padding: "6px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    Pending
                                </Box>
                            </Box>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Index