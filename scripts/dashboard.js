// import {pages} from './dashboardPages'

// Handling the Modals on Dashboard home

const convertFromModal = document.getElementById("convert_from_modal");
const convertToModal = document.getElementById("convert_to_modal");

const openCurrencyModal = () => {
  convertFromModal.style.display = "block";
  convertToModal.style.display = "none";
};

const closeCurrencyModal = () => {
  convertFromModal.style.display = "none";
};

const openConvertToModal = () => {
  convertToModal.style.display = "block";
  convertFromModal.style.display = "none";
};

const closeconvertToModal = () => {
  convertToModal.style.display = "none";
};

// TOGGLING CURRENCY INFO BOARD

const poundsBoard = document.getElementById("pounds_board");
const dollarsBoard = document.getElementById("dollars_board");
const eurosBoard = document.getElementById("euros_board");
const switchPoundsBoard = document.getElementById("switchPoundsBoard");
const switchDollarsBoard = document.getElementById("switchDollarsBoard");
const switchEurosBoard = document.getElementById("switchEurosBoard");

// grab BAD cards
const poundsBADcard = document.getElementById("poundsBADcard");
const dollarsBADcard = document.getElementById("dollarsBADcard");
const eurosBADcard = document.getElementById("eurosBADcard");

//grab ACTIVITES card
const GBPactivities = document.getElementById("GBPactivities");
const USDactivities = document.getElementById("USDactivities");
const EURactivities = document.getElementById("EURactivities");

const showPoundsBoard = () => {
  console.log("pounds");
  dollarsBoard.classList.add("hide_board");
  poundsBoard.classList.remove("hide_board");
  eurosBoard.classList.add("hide_board");

  //toggle active tab button
  switchPoundsBoard.classList.add("select_currency_btn_active");
  switchDollarsBoard.classList.remove("select_currency_btn_active");
  switchEurosBoard.classList.remove("select_currency_btn_active");

  // toggle BAD cards
  dollarsBADcard.classList.add("hide_BAD_card");
  poundsBADcard.classList.remove("hide_BAD_card");
  eurosBADcard.classList.add("hide_BAD_card");

  //toggle activities board
  GBPactivities.classList.remove("hide_activities");
  USDactivities.classList.add("hide_activities");
  EURactivities.classList.add("hide_activities");
};

const showDollarsBoard = () => {
  console.log("dollars");
  poundsBoard.classList.add("hide_board");
  dollarsBoard.classList.remove("hide_board");
  eurosBoard.classList.add("hide_board");

  //toggle active tab button
  switchPoundsBoard.classList.remove("select_currency_btn_active");
  switchDollarsBoard.classList.add("select_currency_btn_active");
  switchEurosBoard.classList.remove("select_currency_btn_active");

  // toggle BAD cards
  dollarsBADcard.classList.remove("hide_BAD_card");
  poundsBADcard.classList.add("hide_BAD_card");
  eurosBADcard.classList.add("hide_BAD_card");

  //toggle activities board
  GBPactivities.classList.add("hide_activities");
  USDactivities.classList.remove("hide_activities");
  EURactivities.classList.add("hide_activities");
};

const showEurosBoard = () => {
  console.log("euros");
  dollarsBoard.classList.add("hide_board");
  poundsBoard.classList.add("hide_board");
  eurosBoard.classList.remove("hide_board");

  //toggle active tab button
  switchPoundsBoard.classList.remove("select_currency_btn_active");
  switchDollarsBoard.classList.remove("select_currency_btn_active");
  switchEurosBoard.classList.add("select_currency_btn_active");

  // toggle BAD cards
  dollarsBADcard.classList.add("hide_BAD_card");
  poundsBADcard.classList.add("hide_BAD_card");
  eurosBADcard.classList.remove("hide_BAD_card");

  //toggle activities board
  GBPactivities.classList.add("hide_activities");
  USDactivities.classList.add("hide_activities");
  EURactivities.classList.remove("hide_activities");
};

// Handle BAD card ROLLUP  sections
const rollup3a = document.getElementById("rollup3a");
const rollup3b = document.getElementById("rollup3b");
const rollup2a = document.getElementById("rollup2a");
const rollup2b = document.getElementById("rollup2b");
const rollup1a = document.getElementById("rollup1a");
const rollup1b = document.getElementById("rollup1b");

const rollup3 = () => {
  rollup3a.classList.toggle("hide_rollup");
  rollup3b.classList.toggle("hide_rollup");
};
const rollup2 = () => {
  rollup2a.classList.toggle("hide_rollup");
  rollup2b.classList.toggle("hide_rollup");
};
const rollup1 = () => {
  rollup1a.classList.toggle("hide_rollup");
  rollup1b.classList.toggle("hide_rollup");
};

// Switch MY ACCOUNT ACCOUNT tabs
const AccountsTab = document.getElementById("AccountsTabId");
const reportsTab = document.getElementById("reportsTabId");
const accountsBtn = document.getElementById("accountsBtn");
const reportsBtn = document.getElementById("reportsBtn");

const switchAccountsTab = () => {
  AccountsTab.classList.remove("hideAccTab");
  reportsTab.classList.add("hideAccTab");
  accountsBtn.classList.add("myaccounts_Header_btn_active");
  reportsBtn.classList.remove("myaccounts_Header_btn_active");
};

function switchReportsTab() {
  AccountsTab.classList.add("hideAccTab");
  reportsTab.classList.remove("hideAccTab");
  accountsBtn.classList.remove("myaccounts_Header_btn_active");
  reportsBtn.classList.add("myaccounts_Header_btn_active");
}

// function switchAccountsTab(n) {
//   if (n == 1) {
//     AccountsTab.classList.remove("hideAccTab");
//     reportsTab.classList.add("hideAccTab");
//     accountsBtn.classList.add("myaccounts_Header_btn_active");
//     reportsBtn.classList.remove("myaccounts_Header_btn_active");
//   } else {
//     AccountsTab.classList.add("hideAccTab");
//     reportsTab.classList.remove("hideAccTab");
//     accountsBtn.classList.remove("myaccounts_Header_btn_active");
//     reportsBtn.classList.add("myaccounts_Header_btn_active");
//   }
// }

// import {pages} from './dashboardPages';

const pages = {
  dashboard: ` <div class="dcHeader">
      <p>Welcome <span>Peter</span></p>
    </div>
    <div class="account_overview_card">
      <div class="aoc_top">
        <h6 class="card_title">Account Overview</h6>
        <div class="add_send_swap_group">
          <button class="aoc_top_btn">
            <img src="./../assets/addmoney.png" alt="add money" /><span
              >Add money</span
            >
          </button>
          <button class="aoc_top_btn">
            <img src="./../assets/sendmoney.png" alt="send money" /><span
              >Send</span
            >
          </button>
          <button class="aoc_top_btn">
            <img src="./../assets/swapmoney.png" alt="swap money" /><span
              >Swap currency</span
            >
          </button>
        </div>
      </div>
      <div class="aoc_bottom">
        <!-- BRITISH POUNDS CARD -->
        <div class="currency_card">
          <div class="currency_card_top">
            <img
              src="./../assets/britain.png"
              alt="Britain"
              class="country_flag"
            />
            <h6>Great Britain Pounds</h6>
          </div>
          <div class="currency_card_bottom">
            <div class="currency_card_bottom_left">
              <small>Available Balance</small>
              <h4>£0.00</h4>
            </div>
            <div class="currency_card_bottom_right">
              <span class="material-symbols-rounded currency_arrow">
                arrow_right_alt
              </span>
            </div>
          </div>
        </div>
        <!-- USA DOLLARS CARD -->
        <div class="currency_card">
          <div class="currency_card_top">
            <img
              src="./../assets/USA.png"
              alt="Britain"
              class="country_flag"
            />
            <h6>United states Dollars</h6>
          </div>
          <div class="currency_card_bottom">
            <div class="currency_card_bottom_left">
              <small>Available Balance</small>
              <h4>$0.00</h4>
            </div>
            <div class="currency_card_bottom_right">
              <span class="material-symbols-rounded currency_arrow">
                arrow_right_alt
              </span>
            </div>
          </div>
        </div>
        <!-- EUROS  CARD -->
        <div class="currency_card">
          <div class="currency_card_top">
            <img
              src="./../assets/euro.png"
              alt="Britain"
              class="country_flag"
            />
            <h6>Euro</h6>
          </div>
          <div class="currency_card_bottom">
            <div class="currency_card_bottom_left">
              <small>Available Balance</small>
              <h4>€0.00</h4>
            </div>
            <div class="currency_card_bottom_right">
              <span class="material-symbols-rounded currency_arrow">
                arrow_right_alt
              </span>
            </div>
          </div>
        </div>
        <!-- NIGERAN NAIRA CARD -->
        <div class="currency_card">
          <div class="currency_card_top">
            <img
              src="./../assets/nigeria.png"
              alt="Britain"
              class="country_flag"
            />
            <h6>Nigerian Naira</h6>
          </div>
          <div class="currency_card_bottom">
            <div class="currency_card_bottom_left">
              <small>Available Balance</small>
              <h4>₦0.00</h4>
            </div>
            <div class="currency_card_bottom_right">
              <span class="material-symbols-rounded currency_arrow">
                arrow_right_alt
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <!-- RECENT TRANSACTIONS card -->
  
    <div class="recent_transactions_card">
      <div class="rtc_top">
        <h6 class="card_title">Recent Transactions</h6>
      </div>
      <table class="rtc_table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Tendered</th>
            <th>Received</th>
            <th>Fee</th>
            <th>Reference</th>
            <th>Status</th>
          </tr>
        </thead>
  
        <tbody>
          <tr>
            <td>Feb 08, 2023, 12:00AM</td>
            <td>Deposit</td>
            <td>$5000</td>
            <td>$4990</td>
            <td>$10</td>
            <td>5SWYVODSBP6</td>
            <td><span class="success_tag">Successful</span></td>
          </tr>
          <tr>
            <td>Feb 08, 2023, 12:00AM</td>
            <td>Deposit</td>
            <td>$5000</td>
            <td>$4990</td>
            <td>$10</td>
            <td>5SWYVODSBP6</td>
            <td><span class="pending_tag">Pending</span></td>
          </tr>
          <tr>
            <td>Feb 08, 2023, 12:00AM</td>
            <td>Deposit</td>
            <td>$5000</td>
            <td>$4990</td>
            <td>$10</td>
            <td>5SWYVODSBP6</td>
            <td><span class="pending_tag">Pending</span></td>
          </tr>
          <tr>
            <td>Feb 08, 2023, 12:00AM</td>
            <td>Deposit</td>
            <td>$5000</td>
            <td>$4990</td>
            <td>$10</td>
            <td>5SWYVODSBP6</td>
            <td><span class="success_tag">Pending</span></td>
          </tr>
        </tbody>
      </table>
      <div class="card_control_btn_container">
        <button
          
          id="test"
          type
          button
          class="card_control_btn"
        >
          View all transactions
        </button>
      </div>
    </div>
  
    <!-- CURRENCY CONVERTER card -->
  
    <div class="currency_converter_card">
      <div class="rtc_top">
        <h6 class="card_title">Currency Converter</h6>
      </div>
      <div class="ccc_bottom">
        <div class="ccc_bottom_left ccc-cards">
          <div>
            <small class="exchange_rate_display">Exchange rate</small>
            <div class="ccc_conversion">
              <p>1 USD equals</p>
              <h5>0.8067 GDP</h5>
            </div>
          </div>
        </div>
        <div class="ccc_bottom_right ccc-cards">
          <div class="ccc_bottom_right_content">
            <!-- CONVERTING FROM HERE -->
            <div class="currency_from_box">
              <div class="currency_from_value_left">
                <label for="currency_from_value_id">Currency from</label>
                <input
                  type="text"
                  value="1.00"
                  id="currency_from_value_id"
                  class="currency_input"
                />
              </div>
              <div class="currency_from_type_right">
                <label for="currency_from_type_id1">Currency Type</label>
                <div
                  onclick="openCurrencyModal(1)"
                  class="currency_input currency_flag"
                  id="currency_from_type_id1"
                >
                  <!-- SELECT CURRENCY modal (CONVERT FROM) -->
                  <div
                    id="convert_from_modal"
                    class="select_currency_modal_top"
                  >
                    <button
  
                    onclick="closeCurrencyModal()"
                      class="choose_currency_btn close_choose_currency"
                    >
                      <span  class="material-symbols-outlined">
                        close
                      </span>
                    </button>
                    <button
                      id="choose_dollars"
                      class="choose_currency_btn"
                    >
                      <img src="./../assets/USA.png" alt="USD" /><span
                        >USD</span
                      >
                    </button>
                    <button
                      id="choose_pounds"
                      class="choose_currency_btn"
                    >
                      <img src="./../assets/britain.png" alt="GBP" /><span
                        >GBP</span
                      >
                    </button>
                    <button id="choose_euro" class="choose_currency_btn">
                      <img src="./../assets/euro.png" alt="EUR" /><span
                        >EUR</span
                      >
                    </button>
                    <button id="choose_naira" class="choose_currency_btn">
                      <img src="./../assets/nigeria.png" alt="NGN" /><span
                        >NGN</span
                      >
                    </button>
                  </div>
  
                  <!-- end of SELECT CURRENCY modal (CONVERT FROM) -->
                  <div class="currency_visuals">
                    <img
                      src="./../assets/USA.png"
                      alt="convertToCurrencyType"
                    />
                    <p>USD</p>
                  </div>
  
                  <span class="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </div>
              </div>
            </div>
  
            <!-- CONVERTING TO HERE -->
            <div class="currency_to_box">
              <div class="currency_from_value_left">
                <label for="currency_from_value_id">Currency To</label>
                <input
                  class="currency_input"
                  type="text"
                  value="0.81"
                  id="currency_from_value_id"
                />
              </div>
              <div class="currency_from_type_right">
                <label for="currency_from_type_id2">Currency Type</label>
                <div
                onclick="openConvertToModal()"
                  class="currency_input currency_flag"
                  id="currency_from_type_id2"
                >
                  <!-- SELECT CURRENCY modal (CONVERT TO) -->
                  <div
                    id="convert_to_modal"
                    class="select_currency_modal_bottom"
                  >
                    <button
                    onclick="closeconvertToModal()"
                      id="choose_dollars"
                      class="choose_currency_btn close_choose_currency"
                    >
                      <span class="material-symbols-outlined">
                        close
                      </span>
                    </button>
                    <button
                      id="choose_dollars"
                      class="choose_currency_btn"
                    >
                      <img src="./../assets/USA.png" alt="USD" /><span
                        >USD</span
                      >
                    </button>
                    <button
                      id="choose_pounds"
                      class="choose_currency_btn"
                    >
                      <img src="./../assets/britain.png" alt="GBP" /><span
                        >GBP</span
                      >
                    </button>
                    <button id="choose_euro" class="choose_currency_btn">
                      <img src="./../assets/euro.png" alt="EUR" /><span
                        >EUR</span
                      >
                    </button>
                    <button id="choose_naira" class="choose_currency_btn">
                      <img src="./../assets/nigeria.png" alt="NGN" /><span
                        >NGN</span
                      >
                    </button>
                  </div>
  
                  <!-- end of SELECT CURRENCY modal (CONVERT TO) -->
                  <div class="currency_visuals">
                    <img
                      src="./../assets/britain.png"
                      alt="convertToCurrencyType"
                    />
                    <p>GBP</p>
                  </div>
  
                  <span class="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`,
  accounts: "<h1>ACCOUNTS</h1><p>This is the settings page.</p>",
  transactions: "<h1>transactions</h1><p>This is the reports page.</p>",
  profile: "<h1>profile</h1><p>This is the reports page.</p>",
  support: "<h1>support</h1><p>This is the reports page.</p>",
  logout: "<h1>Logout</h1><p>This is the reports page.</p>",
};

// rendering the different dashboard pages

document.getElementById("dashboardNav").addEventListener("click", function () {
  renderPage("dashboard");
});

document.getElementById("accountsNav").addEventListener("click", function () {
  renderPage("accounts");
});

document
  .getElementById("transactionsNav")
  .addEventListener("click", function () {
    renderPage("transactions");
  });

document.getElementById("profileNav").addEventListener("click", function () {
  renderPage("profile");
});

document.getElementById("supportNav").addEventListener("click", function () {
  renderPage("support");
});

document.getElementById("logoutNav").addEventListener("click", function () {
  renderPage("logout");
});

function renderPage(page) {
  document.getElementById("dashboard_content_container").innerHTML =
    pages[page];
}

renderPage("dashboard");

//end of rendering the different dashboard pages
