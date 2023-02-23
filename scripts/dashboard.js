// import {pages} from './dashboardPages'

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
  accounts: `   <div class="myaccounts_Header">
  <button
    id="accountsBtn"
    onclick="switchAccountsTab()"
    class="myaccounts_Header_btn myaccounts_Header_btn_active"
  >
    My Accounts
  </button>
  <button
    id="reportsBtn"
    onclick="switchReportsTab()"
    class="myaccounts_Header_btn"
  >
    Report and Statements
  </button>
</div>

<!-- MY ACCOUNTS TAB -->
<div id="AccountsTabId" class="myAccountsTab ">
  <!-- Select currency card -->
  <div class="select_currency_card">
    <div class="sc_top">
      <div class="sc_top_left">
        <h6 class="sc_card_title">Select Currency</h6>
        <div class="select_currency_btn_group">
          <button
            id="switchPoundsBoard"
            onclick="showPoundsBoard()"
            class="select_currency_btn select_currency_btn_active"
          >
            <img
              src="./../assets/britain.png"
              alt=""
              class="sc_flag"
            /><span>GBP</span>
          </button>
          <button
            id="switchDollarsBoard"
            onclick="showDollarsBoard()"
            class="select_currency_btn"
          >
            <img
              src="./../assets/USA.png"
              alt=""
              class="sc_flag"
            /><span>USD</span>
          </button>
          <button
            id="switchEurosBoard"
            onclick="showEurosBoard()"
            class="select_currency_btn"
          >
            <img
              src="./../assets/euro.png"
              alt=""
              class="sc_flag"
            /><span>EUR</span>
          </button>
        </div>
      </div>

      <div class="sc_top_right">
        <button class="sc_top_btn">
          <img src="./../assets/addmoney.png" alt="add money" /><span
            >Add money</span
          >
        </button>
        <button class="sc_top_btn">
          <img
            src="./../assets/sendmoney.png"
            alt="send money"
          /><span>Send</span>
        </button>
        <button class="sc_top_btn">
          <img
            src="./../assets/swapmoney.png"
            alt="swap money"
          /><span>Swap currency</span>
        </button>
      </div>
    </div>
    <!-- CURRENCY INFORMATION BOARD -->
    <div id="pounds_board" class="currency_info_board">
      <p>
        Available <span style="font-weight: 600"> GBP</span> account
        balance £0.00
      </p>

      <h3>£0.00</h3>
    </div>
    <div id="dollars_board" class="currency_info_board hide_board">
      <p>
        Available <span style="font-weight: 600"> USD</span> account
        balance £0.00
      </p>

      <h3>$0.00</h3>
    </div>
    <div id="euros_board" class="currency_info_board hide_board">
      <p>
        Available <span style="font-weight: 600"> EUR</span> account
        balance £0.00
      </p>

      <h3>€0.00</h3>
    </div>
  </div>
  <!-- Bank Account Details Card for Pounds-->
  <div id="poundsBADcard" class="bank_account_details_card">
    <div class="bad_card_header">
      <div class="bad_card_header_left">
        <img
          src="./../assets/britain.png"
          alt="GBP"
          class="bad_card_flag"
        />
        <p>Your GBP bank account details</p>
      </div>
      <div class="bad_card_header_right">
        <button>
          <span class="material-symbols-outlined">
            content_copy
          </span>
          Copy Account Details
        </button>
        <button onclick="rollup1()">
          <span class="material-symbols-outlined"> expand_less </span>
        </button>
      </div>
    </div>
    <div id="rollup1a" class="bad_card_banks">
      <div class="bad_banks_top">
        <div class="account_holder">
          <h6>ACCOUNT HOLDER</h6>
          <p>James & Co.</p>
        </div>
        <div class="account_holder">
          <h6>ACCOUNT NUMBER</h6>
          <p>
            24166357<span class="material-symbols-outlined">
              content_copy
            </span>
          </p>
        </div>
        <div class="account_holder">
          <h6>IBAN</h6>
          <p>
            GB98CLIJUO413702756641
            <span class="material-symbols-outlined">
              content_copy
            </span>
          </p>
        </div>
      </div>
      <div class="bad_banks_lower">
        <div class="account_holder">
          <h6>SORT CODE</h6>
          <p>
            703401
            <span class="material-symbols-outlined">
              content_copy
            </span>
          </p>
        </div>

        <div class="account_holder">
          <h6>SWIFT CODE</h6>
          <p>
            CLUJGB31XXX
            <span class="material-symbols-outlined">
              content_copy
            </span>
          </p>
        </div>
        <div class="account_holder">
          <h6>BANK NAME</h6>
          <p>
            Lloyds Banking Group
            <span class="material-symbols-outlined">
              content_copy
            </span>
          </p>
        </div>
        <div class="account_holder">
          <h6>BANK ADDRESS</h6>
          <p>
            25 Gresham Street, London EC2V 7HN
            <span class="material-symbols-outlined">
              content_copy
            </span>
          </p>
        </div>
      </div>
    </div>
    <!-- KINDLY NOTE card -->
    <div id="rollup1b" class="kindly_note_card">
      <p>Kindly note:</p>
      <p>
        Account can only receive funds in the Great Britain Pounds
        (GBP). You'll be charged a 1% fee on payments made into this
        acount
      </p>
    </div>
  </div>

  <!-- Bank Account Details Card for Dollars -->
  <div id="dollarsBADcard" class="bank_account_details_card">
    <div class="bad_card_header">
      <div class="bad_card_header_left">
        <img
          src="./../assets/USA.png"
          alt="GBP"
          class="bad_card_flag"
        />
        <p>Your USD bank account details</p>
      </div>
      <div class="bad_card_header_right">
        <button>
          <span class="material-symbols-outlined">
            content_copy
          </span>
          Copy Account Details
        </button>
        <button onclick="rollup2()">
          <span class="material-symbols-outlined"> expand_less </span>
        </button>
      </div>
    </div>
    <div id="rollup2a" class="bad_card_banks">
      <div class="bad_banks_top">
        <div class="account_holder">
          <h6>ACCOUNT HOLDER</h6>
          <p>Peter Obi & Co.</p>
        </div>
        <div class="account_holder">
          <h6>ACCOUNT NUMBER</h6>
          <p>
            3EV663630106<span class="material-symbols-outlined">
              content_copy
            </span>
          </p>
        </div>
        <div class="account_holder">
          <h6>IBAN</h6>
          <p>
            GB98CLIJUO413702756641
            <span class="material-symbols-outlined">
              content_copy
            </span>
          </p>
        </div>
      </div>
      <div class="bad_banks_lower">
        <div class="account_holder">
          <h6>ACCOUNT TYPE</h6>
          <p>
            CHECKING
            <span class="material-symbols-outlined">
              content_copy
            </span>
          </p>
        </div>

        <div class="account_holder">
          <h6>SWIFT CODE</h6>
          <p>
            SIVGSU66XXX
            <span class="material-symbols-outlined">
              content_copy
            </span>
          </p>
        </div>
        <div class="account_holder">
          <h6>BANK NAME</h6>
          <p>
            Wells Fargo
            <span class="material-symbols-outlined">
              content_copy
            </span>
          </p>
        </div>
        <div class="account_holder">
          <h6>BANK ADDRESS</h6>
          <p>
            420 Montgomery Street San Francisco, CA 94104
            <span class="material-symbols-outlined">
              content_copy
            </span>
          </p>
        </div>
      </div>
    </div>
    <!-- KINDLY NOTE card -->
    <div id="rollup2b" class="kindly_note_card">
      <p>Kindly note:</p>
      <p>
        Account can only receive funds in the United States Dollar
        (USD). You will be charged a 1% fee on payments made into this
        account. USD payments cannot be received from countries within
        restricted jurisdictions.
      </p>
    </div>
  </div>

  <!-- Bank Account Details Card for Euros -->
  <div
    id="eurosBADcard"
    class="bank_account_details_card hide_BAD_card"
  >
    <div class="bad_card_header">
      <div class="bad_card_header_left">
        <img
          src="./../assets/euro.png"
          alt="GBP"
          class="bad_card_flag"
        />
        <p>Your EUR bank account details</p>
      </div>
      <div class="bad_card_header_right">
        <button>
          <span class="material-symbols-outlined">
            content_copy
          </span>
          Copy Account Details
        </button>
        <button onclick="rollup3()">
          <span class="material-symbols-outlined"> expand_less </span>
        </button>
      </div>
    </div>
    <div id="rollup3a" class="bad_card_banks">
      <div class="bad_banks_top">
        <div class="account_holder">
          <h6>ACCOUNT HOLDER</h6>
          <p>James & Co.</p>
        </div>
        <div class="account_holder">
          <h6>ACCOUNT NUMBER</h6>
          <p>
            723524661<span class="material-symbols-outlined">
              content_copy
            </span>
          </p>
        </div>
        <div class="account_holder">
          <h6>IBAN</h6>
          <p>
            GB98CLIJUO413702756661
            <span class="material-symbols-outlined">
              content_copy
            </span>
          </p>
        </div>
      </div>
      <div class="bad_banks_lower">
        <div class="account_holder">
          <h6>SORT CODE</h6>
          <p>
            703401
            <span class="material-symbols-outlined">
              content_copy
            </span>
          </p>
        </div>

        <div class="account_holder">
          <h6>SWIFT CODE</h6>
          <p>
            CLUJGB31XXX
            <span class="material-symbols-outlined">
              content_copy
            </span>
          </p>
        </div>
        <div class="account_holder">
          <h6>BANK NAME</h6>
          <p>
            Commerzbank, Frankfurt
            <span class="material-symbols-outlined">
              content_copy
            </span>
          </p>
        </div>
        <div class="account_holder">
          <h6>BANK ADDRESS</h6>
          <p>
            Commerzbank AG 60261 Frankfurt/Main
            <span class="material-symbols-outlined">
              content_copy
            </span>
          </p>
        </div>
      </div>
    </div>
    <!-- KINDLY NOTE card -->
    <div id="rollup3b" class="kindly_note_card">
      <p>Kindly note:</p>
      <p>
        Account can only receive funds in Euros (Eur). You will be
        charged a 1% fee on payments made into this account.
      </p>
    </div>
  </div>
  <!-- ACCOUNT ACTIVITIES card for pounds -->
  <div id="GBPactivities" class="account_activites_card">
    <div class="activities_top">
      <h6 class="card_title">GBP Account Activities</h6>
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
        <tr></tr>
      </tbody>
    </table>
    <div class="card_control_btn_container">
      <button id="test" type button class="card_control_btn">
        View all transactions
      </button>
    </div>
  </div>
  <!-- ACCOUNT ACTIVITIES card for dollars -->
  <div
    id="USDactivities"
    class="account_activites_card hide_activities"
  >
    <div class="activities_top">
      <h6 class="card_title">USD Account Activities</h6>
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
        <tr></tr>
      </tbody>
    </table>
    <div class="card_control_btn_container">
      <button id="test" type button class="card_control_btn">
        View all transactions
      </button>
    </div>
  </div>
  <!-- ACCOUNT ACTIVITIES card for EUROS -->
  <div
    id="EURactivities"
    class="account_activites_card hide_activities"
  >
    <div class="activities_top">
      <h6 class="card_title">EUR Account Activities</h6>
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
        <tr></tr>
      </tbody>
    </table>
    <div class="card_control_btn_container">
      <button id="test" type button class="card_control_btn">
        View all transactions
      </button>
    </div>
  </div>
</div>
<!-- REPORTS TAB -->
<div id="reportsTabId" class="reports_tab hideAccTab">
  <div onclick="showAccountStatementForm()" class="statement_box">
    <span class="material-symbols-outlined statement_box_icon">
      description
    </span>
    <div>
      <p>Get your statement of account</p>
      <span class="material-symbols-outlined"> download </span>
    </div>
  </div>
  <div class="statement_box">
    <span class="material-symbols-outlined statement_box_icon">
      description
    </span>
    <div>
      <p>Get your proof of account</p>
      <span class="material-symbols-outlined"> download </span>
    </div>
  </div>
  <!-- ACCOUNT STATEMENT FORM POP UP -->
  <div id="statementAccountModal" class="account_statement_form_container">
    <div class="account_statement_form">
     
        <h4>Download Account Statement</h4>
     
      <div class="asf_form_control">
        <label>Select currency</label>
        <select>
          <option value="GBP">
            <img src="./../assets/britain.png" />
            GBP
          </option>
          <option value="USD">
            <img src="./../assets/USA.png" />
            USA
          </option>
          <option value="EUR">
            <img src="./../assets/USA.png" />
            EUR
          </option>
          <option value="NGN">
            <img src="./../assets/nigeria.png" />
            NGN
          </option>
        </select>
      </div>
      <div class="asf_form_control">
        <label>Start Date</label>
      <input type="date"/>
      </div>
      <div class="asf_form_control">
        <label>End Date</label>
      <input type="date"/>
      </div>
      <div class="asf_form_control">
        <label>File Format</label>
      <div class="radio_input_container">
        <div class="csv_input">
          <input type="radio"/>
          <label>CSV</label>
        </div>
        <div class="csv_input">
          <input type="radio"/>
          <label>PDF</label>
        </div>
      </div>
      </div>
      <div class="asf_form_button_group">
        <button onclick="hideAccountStatementForm()" class="asf_form_button cancel_asf">Cancel</button>
        <button class="asf_form_button">Download</button>
      </div>
    </div>
  </div>
</div>
`,
  transactions: `    <div class="dcHeader">
  <p>Transactions</p>
</div>
<div class="transactions_table">
  <div class="tt_header">
    <div class="tt_header_left">
      <select class="tt_header_input">
        <option>All transactions</option>
        <option>Deposit</option>
        <option>Sent</option>
        <option>Swap</option>
      </select>
      <select class="tt_header_input">
        <option>All Currencies</option>
        <option>GBP</option>
        <option>USD</option>
        <option>EUR</option>
      </select>
    </div>
    <div class="tt_header_right">
      <div>
        <label>From</label>
        <input class="tt_header_input" type="date"/>
      </div>
      <div>
        <label>to</label>
        <input class="tt_header_input" type="date"/>
      </div>
    </div>
    
  </div>
  <table class="rtc_table tt_body">
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
        <td><span class="pending_tag">Pending</span></td>
      </tr>
      <tr>
        <td>Feb 08, 2023, 12:00AM</td>
        <td>Deposit</td>
        <td>$5000</td>
        <td>$4990</td>
        <td>$10</td>
        <td>5SWYVODSBP6</td>
        <td><span class="success_tag">successful</span></td>
      </tr>
      <tr>
        <td>Feb 08, 2023, 12:00AM</td>
        <td>Deposit</td>
        <td>$5000</td>
        <td>$4990</td>
        <td>$10</td>
        <td>5SWYVODSBP6</td>
        <td><span class="success_tag">successful</span></td>
      </tr>
      <tr>
        <td>Feb 08, 2023, 12:00AM</td>
        <td>Deposit</td>
        <td>$5000</td>
        <td>$4990</td>
        <td>$10</td>
        <td>5SWYVODSBP6</td>
        <td><span class="success_tag">successful</span></td>
      </tr>
      <tr>
        <td>Feb 08, 2023, 12:00AM</td>
        <td>Deposit</td>
        <td>$5000</td>
        <td>$4990</td>
        <td>$10</td>
        <td>5SWYVODSBP6</td>
        <td><span class="success_tag">successful</span></td>
      </tr>
      <tr>
        <td>Feb 08, 2023, 12:00AM</td>
        <td>Deposit</td>
        <td>$5000</td>
        <td>$4990</td>
        <td>$10</td>
        <td>5SWYVODSBP6</td>
        <td><span class="success_tag">successful</span></td>
      </tr>
      <tr>
        <td>Feb 08, 2023, 12:00AM</td>
        <td>Deposit</td>
        <td>$5000</td>
        <td>$4990</td>
        <td>$10</td>
        <td>5SWYVODSBP6</td>
        <td><span class="success_tag">successful</span></td>
      </tr>
    </tbody>
  </table>
  <div class="table_pagination">
    <div class="table_pagination_left">
      <p>Viewing <span>1-10</span> of <span>100</span></p>
      <div>
        <button class="table_page_left"><span class="material-symbols-outlined">
          arrow_back_ios
          </span></button>
        <button class="table_page_right"><span class="material-symbols-outlined">
          arrow_forward_ios
          </span></button>
      </div>
    </div>
    <div class="table_pagination_right">
      <p>Number of entries per page</p>
      <select>
        <option>10</option>
        <option>20</option>
        <option>30</option>
      </select>
    </div>
  </div>
</div>`,
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

// Handling the Modals on Dashboard home



const openCurrencyModal = () => {
  const convertFromModal = document.getElementById("convert_from_modal");
const convertToModal = document.getElementById("convert_to_modal");
  console.log('hello Peter obi')
  console.log(convertFromModal)
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



const showPoundsBoard = () => {


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


const switchAccountsTab = () => {
  // grab dom elements
  const AccountsTab = document.getElementById("AccountsTabId");
const reportsTab = document.getElementById("reportsTabId");
const accountsBtn = document.getElementById("accountsBtn");
const reportsBtn = document.getElementById("reportsBtn");

  AccountsTab.classList.remove("hideAccTab");
  reportsTab.classList.add("hideAccTab");
  accountsBtn.classList.add("myaccounts_Header_btn_active");
  reportsBtn.classList.remove("myaccounts_Header_btn_active");
};

function switchReportsTab() {
  const AccountsTab = document.getElementById("AccountsTabId");
const reportsTab = document.getElementById("reportsTabId");
const accountsBtn = document.getElementById("accountsBtn");
const reportsBtn = document.getElementById("reportsBtn");

  AccountsTab.classList.add("hideAccTab");
  reportsTab.classList.remove("hideAccTab");
  accountsBtn.classList.remove("myaccounts_Header_btn_active");
  reportsBtn.classList.add("myaccounts_Header_btn_active");
}




// Handle FORM ACCOUNT STATEMENT MODALS



const showAccountStatementForm =()=>{
  const statementAccountModal = document.getElementById('statementAccountModal')
  statementAccountModal.style.display='flex'
}
const hideAccountStatementForm =()=>{
  statementAccountModal.style.display='none'
}



//Handle account modal

const accountModal = document.getElementById('passwordModal');

const openPasswordModal = ()=>{
  accountModal.style.display='flex'
  accountModal.style.opacity='1'
}

const closePasswordModal = ()=>{
  accountModal.style.display='none'
  accountModal.style.opacity='0'
}


const basicInfo = document.getElementById('basicInfo')
const notificationsSettings = document.getElementById('notificationsSettings')
const securityCard = document.getElementById('securityCard')

const switchBasicInfoTab = () =>{
  basicInfo.classList.remove('hide_tab')
  notificationsSettings.classList.add('hide_tab')
  securityCard.classList.add('hide_tab')
}

const switchNotificationTab = () =>{
  basicInfo.classList.add('hide_tab')
  notificationsSettings.classList.remove('hide_tab')
  securityCard.classList.add('hide_tab')
}

const switchSecurityTab = () =>{
  basicInfo.classList.add('hide_tab')
  notificationsSettings.classList.add('hide_tab')
  securityCard.classList.remove('hide_tab')
}