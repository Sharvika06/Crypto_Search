// import React, { useEffect, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Pagination from "@material-ui/lab/Pagination";
// import {
//   Container,
//   createTheme,
//   TableCell,
//   LinearProgress,
//   ThemeProvider,
//   Typography,
//   TextField,
//   TableBody,
//   TableRow,
//   TableHead,
//   TableContainer,
//   Table,
//   Paper,
// } from "@material-ui/core";
// import axios from "axios";
// import { CoinList } from "../config/api";
// import { useHistory } from "react-router-dom";
// import { CryptoState } from "../CryptoContext";

// export function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

// export default function CoinsTable() {
//   const [coins, setCoins] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);

//   const { currency, symbol } = CryptoState();

//   const useStyles = makeStyles({
//     row: {
//       backgroundColor: "#16171a",
//       cursor: "pointer",
//       "&:hover": {
//         backgroundColor: "#131111",
//       },
//       fontFamily: "Montserrat",
//     },
//     pagination: {
//       "& .MuiPaginationItem-root": {
//         color: "lightblue",
//       },
//     },
//   });

//   const classes = useStyles();
//   const history = useHistory();

//   const darkTheme = createTheme({
//     palette: {
//       primary: {
//         main: "#fff",
//       },
//       type: "dark",
//     },
//   });

//   const fetchCoins = async () => {
//     setLoading(true);
//     const { data } = await axios.get(CoinList(currency));
//     console.log(data);

//     setCoins(data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchCoins();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [currency]);

//   const handleSearch = () => {
//     return coins.filter(
//       (coin) =>
//         coin.name.toLowerCase().includes(search) ||
//         coin.symbol.toLowerCase().includes(search)
//     );
//   };

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Container style={{ textAlign: "center" }}>
//         <Typography
//           variant="h4"
//           style={{ margin: 18, fontFamily: "Montserrat" , color: "lightblue" , fontWeight: "bold"}}
//         >
//           Cryptocurrency Prices by Market Cap
//         </Typography>
//         <TextField
//           label="Search For a Crypto Currency.."
//           variant="outlined"
//           style={{ marginBottom: 20, width: "100%" }}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <TableContainer component={Paper}>
//           {loading ? (
//             <LinearProgress style={{ backgroundColor: "lightblue" }} />
//           ) : (
//             <Table aria-label="simple table">
//               <TableHead style={{ backgroundColor: "lightblue" }}>
//                 <TableRow>
//                   {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
//                     <TableCell
//                       style={{
//                         color: "black",
//                         fontWeight: "700",
//                         fontFamily: "Montserrat",
//                       }}
//                       key={head}
//                       align={head === "Coin" ? "" : "right"}
//                     >
//                       {head}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>

//               <TableBody>
//                 {handleSearch()
//                   .slice((page - 1) * 10, (page - 1) * 10 + 10)
//                   .map((row) => {
//                     const profit = row.price_change_percentage_24h > 0;
//                     return (
//                       <TableRow
//                         onClick={() => history.push(`/coins/${row.id}`)}
//                         className={classes.row}
//                         key={row.name}
//                       >
//                         <TableCell
//                           component="th"
//                           scope="row"
//                           style={{
//                             display: "flex",
//                             gap: 15,
//                           }}
//                         >
//                           <img
//                             src={row?.image}
//                             alt={row.name}
//                             height="30"
//                             style={{ marginBottom: 10 }}
//                           />
//                           <div
//                             style={{ display: "flex", flexDirection: "column" }}
//                           >
//                             <span
//                               style={{
//                                 textTransform: "uppercase",
//                                 fontSize: 14,
//                               }}
//                             >
//                               {row.symbol}
//                             </span>
//                             <span style={{ color: "darkgrey" }}>
//                               {row.name}
//                             </span>
//                           </div>
//                         </TableCell>
//                         <TableCell align="right">
//                           {symbol}{" "}
//                           {numberWithCommas(row.current_price.toFixed(2))}
//                         </TableCell>
//                         <TableCell
//                           align="right"
//                           style={{
//                             color: profit > 0 ? "rgb(14, 203, 129)" : "red",
//                             fontWeight: 500,
//                           }}
//                         >
//                           {profit && "+"}
//                           {row.price_change_percentage_24h.toFixed(2)}%
//                         </TableCell>
//                         <TableCell align="right">
//                           {symbol}{" "}
//                           {numberWithCommas(
//                             row.market_cap.toString().slice(0, -6)
//                           )}
//                           M
//                         </TableCell>
//                       </TableRow>
//                     );
//                   })}
//               </TableBody>
//             </Table>
//           )}
//         </TableContainer>

//         {/* Comes from @material-ui/lab */}
//         <Pagination
//           count={(handleSearch()?.length / 10).toFixed(0)}
//           style={{
//             padding: 20,
//             width: "100%",
//             display: "flex",
//             justifyContent: "center",
//           }}
//           classes={{ ul: classes.pagination }}
//           onChange={(_, value) => {
//             setPage(value);
//             window.scroll(0, 450);
//           }}
//         />
//       </Container>
//     </ThemeProvider>
//   );
// }


import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import {
  Container,
  createTheme,
  TableCell,
  LinearProgress,
  ThemeProvider,
  Typography,
  TextField,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
} from "@material-ui/core";
import axios from "axios";
import { CoinList } from "../config/api";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function CoinsTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { currency, symbol } = CryptoState();

  const useStyles = makeStyles({
    row: {
      backgroundColor: "#0C2D48",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#001F3D",
      },
      fontFamily: "Montserrat",
    },
    pagination: {
      "& .MuiPaginationItem-root": {
        color: "lightblue",
      },
    },
  });

  const classes = useStyles();
  const history = useHistory();

  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const handlePageChange = (_, value) => {
    setPage(value);
    window.scroll(0, 450);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <Typography variant="h4" style={{ margin: 18, fontFamily: "Montserrat", color: "lightblue", fontWeight: "bold" }}>
          Cryptocurrency Prices by Market Cap
        </Typography>
        <TextField
          label="Search For a Crypto Currency.."
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer component={Paper}>
          {loading ? (
            <LinearProgress style={{ backgroundColor: "lightblue" }} />
          ) : (
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Coin</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">24h Change</TableCell>
                  <TableCell align="right">Market Cap</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filteredCoins
                  .slice((page - 1) * 10, page * 10)
                  .map((row) => (
                    <TableRow
                      key={row.name}
                      className={classes.row}
                      onClick={() => history.push(`/coins/${row.id}`)}
                    >
                      <TableCell component="th" scope="row">
                        <img
                          src={row?.image}
                          alt={row.name}
                          height="30"
                          style={{ marginRight: 10 }}
                        />
                        <div>
                          <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                            {row.name}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {row.symbol.toUpperCase()}
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        {symbol} {numberWithCommas(row.current_price.toFixed(2))}
                      </TableCell>
                      <TableCell align="right" style={{ color: row.price_change_percentage_24h > 0 ? "green" : "red" }}>
                        {row.price_change_percentage_24h.toFixed(2)}%
                      </TableCell>
                      <TableCell align="right">
                        {symbol} {numberWithCommas(row.market_cap.toString().slice(0, -6))}M
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>

        <Pagination
          count={Math.ceil(filteredCoins.length / 10)}
          style={{ marginTop: 20, display: "flex", justifyContent: "center" }}
          classes={{ ul: classes.pagination }}
          onChange={handlePageChange}
        />
      </Container>
    </ThemeProvider>
  );
}
