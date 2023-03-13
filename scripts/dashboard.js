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
  global: `  <div class="dcHeader">
  <p>Global Transfer</p>
</div>
<div class="global_transfer_container">
  <div class="transfer_form_container">
    <div class="tfc_header">
      <h5>Send Money</h5>
      <div class="switchSingleBulk">
        <div class="single_transfer">
          <input
            value="singleTransfer"
            class="radio_transfer"
            id="selectSingleTransfer"
            type="radio"
            name="transfers"
            onchange="handleChange(1)"
            checked
          />
          <label for="selectSingleTransfer">Single Transfer</label>
        </div>
        <div class="bulk_transfer">
          <input
            value="bulkTransfer"
            class="radio_transfer"
            id="selectBulkTransfer"
            type="radio"
            name="transfers" 
            onchange="handleChange(5)"
          />
          <label  for="selectBulkTransfer">Bulk Transfer</label>
        </div>
      </div>
    </div>
    <div id="tfcBodyId" class="tfc_body">
  
  <div id="page1"  class="singleTransfer_Page1">
  <div class="exchange_Rate_box">
    <p>Exchange Rate:</p>
    <p>750 NGN = 1 USD</p>
  </div>
  <!-- country/amount converter input -->
  <div class="country_amount_box">
    <p class="send_amount">₦0</p>
    <label>Country/amount to send</label>
    <input
      type="text"
      placeholder="NGN"
      class="country_amount_input"
      readonly
    />
    <!-- Modal for currency converter -->
    <div class="tfc_currency_options">
      <div class="tfc_currency_btn usa_btn">
        <div class="tfc_c_btn_left">
          <img src="./../assets/USA.png" alt="USA" />
          <span>United states</span>
        </div>
        <span>USD</span>
      </div>
      <div class="tfc_currency_btn uk_btn">
        <div class="tfc_c_btn_left">
          <img src="./../assets/britain.png" alt="UK" />
          <span>United Kingdom</span>
        </div>
        <span>GBP</span>
      </div>
      <div class="tfc_currency_btn india_btn">
        <div class="tfc_c_btn_left">
          <img src="./../assets/india.png" alt="india" />
          <span>India</span>
        </div>
        <span>INR</span>
      </div>
      <div class="tfc_currency_btn india2_btn">
        <div class="tfc_c_btn_left">
          <img src="./../assets/india.png" alt="india" />
          <span>India</span>
        </div>
        <span>USD</span>
      </div>
      <div class="tfc_currency_btn china_btn">
        <div class="tfc_c_btn_left">
          <img src="./../assets/china.png" alt="china" />
          <span>China</span>
        </div>
        <span>YUAN</span>
      </div>
      <div class="tfc_currency_btn china2_btn">
        <div class="tfc_c_btn_left">
          <img src="./../assets/china.png" alt="china" />
          <span>China</span>
        </div>
        <span>USD</span>
      </div>
      <div class="tfc_currency_btn china2_btn">
        <div class="tfc_c_btn_left">
          <img src="./../assets/nigeria.png" alt="china" />
          <span>Nigeria</span>
        </div>
        <span>NGN</span>
      </div>
    </div>
    <!-- end of Modal for currency converter -->
  </div>
      <!-- select receipient input -->
      <div class="country_amount_box">
        <p class="send_amount">¥2,985.47</p>
        <label>Select recipient country/currency</label>
        <input
          type="text"
          placeholder="YUAN"
          class="country_amount_input"
          readonly
        />
        <!-- Modal for currency converter -->
        <div class="tfc_currency_options">
          <div class="tfc_currency_btn usa_btn">
            <div class="tfc_c_btn_left">
              <img src="./../assets/USA.png" alt="USA" />
              <span>United states</span>
            </div>
            <span>USD</span>
          </div>
          <div class="tfc_currency_btn uk_btn">
            <div class="tfc_c_btn_left">
              <img src="./../assets/britain.png" alt="UK" />
              <span>United Kingdom</span>
            </div>
            <span>GBP</span>
          </div>
          <div class="tfc_currency_btn india_btn">
            <div class="tfc_c_btn_left">
              <img src="./../assets/india.png" alt="india" />
              <span>India</span>
            </div>
            <span>INR</span>
          </div>
          <div class="tfc_currency_btn india2_btn">
            <div class="tfc_c_btn_left">
              <img src="./../assets/india.png" alt="india" />
              <span>India</span>
            </div>
            <span>USD</span>
          </div>
          <div class="tfc_currency_btn china_btn">
            <div class="tfc_c_btn_left">
              <img src="./../assets/china.png" alt="china" />
              <span>China</span>
            </div>
            <span>YUAN</span>
          </div>
          <div class="tfc_currency_btn china2_btn">
            <div class="tfc_c_btn_left">
              <img src="./../assets/china.png" alt="china" />
              <span>China</span>
            </div>
            <span>USD</span>
          </div>
          <div class="tfc_currency_btn china2_btn">
            <div class="tfc_c_btn_left">
              <img src="./../assets/nigeria.png" alt="china" />
              <span>Nigeria</span>
            </div>
            <span>NGN</span>
          </div>
        </div>
        
      </div>
      <div class="feeTransferBoard">
        <div class="fee_line">
          <div class="fl_left"><p>Fee</p></div>
          <div class="fl_right"><p style="font-weight: 600;">5,694 NGN</p></div>
        </div>
        <div class="fee_line">
          <div class="fl_left"><p>Transfer time</p></div>
          <div class="fl_right"><p style="font-weight: 600;">Within 24 hours</p><button title="Excludes weekends & Public holidays" class="info_btn"><span class="material-symbols-rounded">
            info
            </span></button></div>
            <!-- Additional info board -->
            
        </div>
        <div class="fee_line"></div>
      </div>
      <div class="feeTransferBoard">
        <div class="fee_line">
          <div class="fl_left"><p>Amount to pay</p></div>
          <div class="fl_right"><p style="font-weight: 600;">205,694 NGN</p></div>
        </div>
        <div class="fee_line">
          <div class="fl_left"><p>Recipient gets</p></div>
          <div class="fl_right"><p style="font-weight: 600;">2,985.47 YUAN</p></div>
        </div>
        <div class="fee_line"></div>
      </div>
      <button onclick='handlePageTwo()' id='pageOneBtn' class="page_progress_btn">Continue</button>
</div>
    </div>
  </div>
</div>`,
  transactions: `<div class="dcHeader">
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
  profile: `   <div class="dcHeader">
  <p>Profile</p>
</div>
<div class="profile_tabs_container">
  <div class="profile_tabs_header">
    <button id="basicInfoTabBtn"
      onclick="switchBasicInfoTab()"
      class="profile_tab_btn active_profile_tab"
    >
      Basic Information
    </button>
    <button  id="notifyTabBtn" onclick="switchNotificationTab()" class="profile_tab_btn">Notification settings</button>
    <button id="securityTabBtn" onclick="switchSecurityTab()" class="profile_tab_btn">Security</button>
  </div>
  <!-- BASIC INFO CARD -->
  <div id="basicInfo" class="basic_information_container  ">
    <div class="basic_info_form_cards">
      <div class="bif_card">
        <h6>Personal Details</h6>
        <p class="bif_full_name">
          Full Name <span>(Your legal full name)</span>
        </p>
        <!-- name -->
        <div class="bif_name">
          <div class="bif_firstname">
            <label>First Name</label>
            <input class="bif_input" type="text" value="Peter" />
          </div>
          <div class="bif_lastname">
            <label>Last Name</label>
            <input class="bif_input" type="text" value="Obi" />
          </div>
        </div>
        <!-- email address -->
        <div class="bif_email">
          <label
            >Email address
            <span>(Your registered email address)</span></label
          >
          <input
            class="bif_input"
            type="email"
            placeholder="example@gmail.com"
          />
        </div>
        <!-- phone number -->
        <div class="bif_phone">
          <label
            >Phone number
            <span>(Your registered phone number)</span></label
          >
          <input
            class="bif_input"
            type="phone"
            placeholder="07020245628"
          />
        </div>
      </div>
      <div class="bif_card">
        <h6>Business Details</h6>
        <!-- email address -->
        <div class="bif_email">
          <label
            >Business Name
            <span>(The business name for this account)</span></label
          >
          <input class="bif_input" type="email" value="Peter & co." />
        </div>
        <!-- phone number -->
        <div class="bif_phone">
          <label
            >Business type
            <span>(what your business does)</span></label
          >
          <input
            class="bif_input"
            type="phone"
            placeholder="Importers & Exporters of Women Wears"
          />
        </div>
      </div>
    </div>
    <button id="saveProfileBtnID" class="saveProfileBtn">
      Save Changes
    </button>
  </div>
  <!-- notifications card -->
  <div
    id="notificationsSettings"
    class="notifications_container  hide_tab"
  >
    <!-- LOGIN ALERTS -->
    <div class="alert_container">
      <h6>
        Login ALerts
        <span
          >(Notifications on successful logins to your account)</span
        >
      </h6>
      <div class="alerts_check">
        <div class="alerts_check_content">
          <input type="checkbox" /> <label>Push Notifications</label>
        </div>
        <div class="alerts_check_content">
          <input type="checkbox" /> <label>Email</label>
        </div>
      </div>
    </div>
    <!-- TRANSACTION ALERTS -->
    <div class="alert_container">
      <h6>
        Transaction ALerts
        <span
          >(Notifications on the status of your transactions)</span
        >
      </h6>
      <div class="alerts_check">
        <div class="alerts_check_content">
          <input type="checkbox" /> <label>Push Notifications</label>
        </div>
        <div class="alerts_check_content">
          <input type="checkbox" /> <label>Email</label>
        </div>
      </div>
    </div>
    <!-- PRICE ALERTS -->
    <div class="alert_container">
      <h6>
        Price Alerts
        <span>(Notifications on fluctuations in currency rates)</span>
      </h6>
      <div class="alerts_check">
        <div class="alerts_check_content">
          <input type="checkbox" /> <label>Push Notifications</label>
        </div>
      </div>
    </div>
    <button id="saveProfileBtnID" class="saveProfileBtn">
      Save Changes
    </button>
  </div>
  <!-- security card -->
  <div id="securityCard" class="security_container hide_tab">
    <div class="switch_container">
      <h6>Two Factor Authentication</h6>
      <label class="switch">
        <input type="checkbox" checked />
        <span class="slider round"></span>
      </label>
    </div>
    <p class="tfa_desc">
      TFA is highly
      <span
        style="font-weight: 600; color: #6b43fb; font-style: italic"
        >recommended</span
      >because adds extra layer of security to your Swifia account to
      protect you from unauthorized transactions
    </p>
    <span class="profile_password">Password</span>
    <p class="update_password">Update existing password</p>
    <button onclick="openPasswordModal()" class="changePassword">
      Change password
    </button>
    <button id="saveProfileBtnID" class="saveProfileBtn">
      Save Changes
    </button>

    <!-- Change password MODAL -->
    <div id="passwordModal" class="change_password_modal">
      <div class="change_password_modal_content">
        <span
          onclick="closePasswordModal()"
          class="material-symbols-outlined close_card"
        >
          close
        </span>
        <h6 class="cph6">Change Password</h6>
        <div class="password_labels">
          <label>Old Password</label>
          <span class="material-symbols-outlined close_eye">
            visibility_off
          </span>
          <input
            placeholder="Enter Old password"
            class="password_input"
            type="password"
          />
        </div>
        <div class="password_labels">
          <label>New Password</label>
          <span class="material-symbols-outlined close_eye">
            visibility_off
          </span>
          <input
            placeholder="Enter New password"
            class="password_input"
            type="password"
          />
        </div>
        <div class="password_labels">
          <label>Confirm new Password</label>
          <span class="material-symbols-outlined close_eye">
            visibility_off
          </span>
          <input
            placeholder="Enter new password again"
            class="password_input"
            type="password"
          />
        </div>
        <div class="cp_btn_group">
          <button onclick="closePasswordModal()" class="cp_btn cancel_cp_btn">Cancel</button>
          <button class="cp_btn">Change Password</button>
        </div>
      </div>
    </div>
  </div>
</div>`,
  support: `   <div class="dcHeader">
  <p>Support</p>
</div>
<div class="profile_tabs_container">
  <div class="profile_tabs_header">
    <button
      id="switchmessageBtn"
      onclick="switchMessageTab()"
      class="profile_tab_btn active_profile_tab"
    >
      Message
    </button>
    <button
      id="switchContactBtn"
      onclick="switchContactTab()"
      class="profile_tab_btn"
    >
      Contact details
    </button>
    <button
      id="switchFaqsBtn"
      onclick="switchFaqTab()"
      class="profile_tab_btn"
    >
      FAQs
    </button>
  </div>
  <!-- Message container -->
  <div id="supportMessage" class="basic_information_container ">
    <div class="support_message_form">
      <div class="smf_header">
        <h4>Hi There, How can we help?</h4>
        <p>
          Kindly drop us a message our support team will get across to
          you shortly
        </p>
      </div>
      <div class="smf_body">
        <div class="message_title">
          <label>Message Title</label>
          <input
            class="messageTitleInput"
            placeholder="Enter message title"
            type="text"
          />
        </div>
        <div class="message_title">
          <label>Message</label>
          <textarea
            rows="10"
            cols="10"
            class="messageMessageInput"
            placeholder="Type your message...."
            tabindex="5"
            required
          ></textarea>
        </div>
        <button class="saveProfileBtn">Send Message</button>
      </div>
    </div>
  </div>
  <!-- Contact details container -->
  <div id="supportContact" class="basic_information_container hide_tab">
    <div class="support_message_form">
      <div class="smf_header">
        <h4>Get in touch</h4>
        <p>Below are our contact details for ease of reach</p>
      </div>
      <div class="contact_details">
        <p>Contact Details</p>
        <div>
          <div class="phone_number">
            <span class="material-symbols-outlined"> call </span>
            <p>+2348979573756</p>
          </div>
          <div class="phone_number">
            <span class="material-symbols-rounded"> mail </span>
            <p>Support@swifia.com</p>
          </div>
          <div class="phone_number">
            <span class="material-symbols-rounded"> pin_drop </span>
            <p>6391 Elgin St. Celina, Delaware 10299</p>
          </div>
        </div>
      </div>
      <div class="whatsapp_details">
        <p>WhatsApp</p>
        <span>Click here to chat with us on WhatsApp</span>
        <div>
          <button class="whatsapp_button">
            <span class="material-symbols-outlined">
              arrow_circle_right </span
            >+2348979573756
          </button>
        </div>
      </div>
    </div>
  </div>
    <!-- FAQs container -->
    <div id="supportFaq" class="basic_information_container hide_tab">
      <div class="faq_content">
        <div class="smf_header">
          <h4>Frequently Asked Questions</h4>
          <p>We have provided you with detailed guide and answers to most pressing questions</p>
        </div>
        <div class="faq_dropdown_container">
         <div class="faq_bag">
          <div class="faq_dropdown">
            <div class="faq_dropdown_header">
              <p>How do I send my foreign account to my business partners?</p>
             <button onclick="revealFaqDesc()"> <span class="material-symbols-outlined">
              expand_more
              </span></button>
            </div>
            <p class="faq_dropdown_body hide_tab">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus voluptate officia magnam nobis nihil cum pariatur, quo maxime consequatur suscipit ut velit nesciunt optio, id nam deleniti amet! Enim!
            </p>
          </div>
          <div class="faq_dropdown">
            <div class="faq_dropdown_header">
              <p>How do I send my foreign account to my business partners?</p>
             <button onclick="revealFaqDesc()"> <span class="material-symbols-outlined">
              expand_more
              </span></button>
            </div>
            <p class="faq_dropdown_body hide_tab">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus voluptate officia magnam nobis nihil cum pariatur, quo maxime consequatur suscipit ut velit nesciunt optio, id nam deleniti amet! Enim!
            </p>
          </div>
          <div class="faq_dropdown">
            <div class="faq_dropdown_header">
              <p>How do I send my foreign account to my business partners?</p>
             <button onclick="revealFaqDesc()"> <span class="material-symbols-outlined">
              expand_more
              </span></button>
            </div>
            <p class="faq_dropdown_body hide_tab">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus voluptate officia magnam nobis nihil cum pariatur, quo maxime consequatur suscipit ut velit nesciunt optio, id nam deleniti amet! Enim!
            </p>
          </div>
          <div class="faq_dropdown">
            <div class="faq_dropdown_header">
              <p>How do I send my foreign account to my business partners?</p>
             <button onclick="revealFaqDesc()"> <span class="material-symbols-outlined">
              expand_more
              </span></button>
            </div>
            <p class="faq_dropdown_body hide_tab">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus voluptate officia magnam nobis nihil cum pariatur, quo maxime consequatur suscipit ut velit nesciunt optio, id nam deleniti amet! Enim!
            </p>
          </div>
     
        
         </div>
          
        </div>
        
      </div>
    </div>
</div>`,
  logout: "<h1>Logout</h1><p>This is the reports page.</p>",
};

// rendering the different dashboard pages

document.getElementById("dashboardNav").addEventListener("click", function () {
  renderPage("dashboard");
});

document.getElementById("accountsNav").addEventListener("click", function () {
  renderPage("accounts");
});

document.getElementById("globalNav").addEventListener("click", function () {
  renderPage("global");
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
  console.log("hello Peter obi");
  console.log(convertFromModal);
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

const showAccountStatementForm = () => {
  const statementAccountModal = document.getElementById(
    "statementAccountModal"
  );
  statementAccountModal.style.display = "flex";
};
const hideAccountStatementForm = () => {
  statementAccountModal.style.display = "none";
};

//Handle account modal

const openPasswordModal = () => {
  console.log("jollof");
  const accountModal = document.getElementById("passwordModal");
  accountModal.style.display = "flex";
  accountModal.style.opacity = "1";
};

const closePasswordModal = () => {
  const accountModal = document.getElementById("passwordModal");
  accountModal.style.display = "none";
  accountModal.style.opacity = "0";
};

// HANDLE PROFILE MODAL

const switchBasicInfoTab = () => {
  //grab elements
  const basicInfo = document.getElementById("basicInfo");
  const notificationsSettings = document.getElementById(
    "notificationsSettings"
  );
  const securityCard = document.getElementById("securityCard");

  basicInfo.classList.remove("hide_tab");
  notificationsSettings.classList.add("hide_tab");
  securityCard.classList.add("hide_tab");

  const basicInfoTabBtn = document.getElementById("basicInfoTabBtn");
  const notifyTabBtn = document.getElementById("notifyTabBtn");
  const securityTabBtn = document.getElementById("securityTabBtn");

  basicInfoTabBtn.classList.add("active_profile_tab");
  notifyTabBtn.classList.remove("active_profile_tab");
  securityTabBtn.classList.remove("active_profile_tab");
};

const switchNotificationTab = () => {
  //grab elements
  const basicInfo = document.getElementById("basicInfo");
  const notificationsSettings = document.getElementById(
    "notificationsSettings"
  );
  const securityCard = document.getElementById("securityCard");

  basicInfo.classList.add("hide_tab");
  notificationsSettings.classList.remove("hide_tab");
  securityCard.classList.add("hide_tab");

  const basicInfoTabBtn = document.getElementById("basicInfoTabBtn");
  const notifyTabBtn = document.getElementById("notifyTabBtn");
  const securityTabBtn = document.getElementById("securityTabBtn");

  basicInfoTabBtn.classList.remove("active_profile_tab");
  notifyTabBtn.classList.add("active_profile_tab");
  securityTabBtn.classList.remove("active_profile_tab");
};

const switchSecurityTab = () => {
  //grab elements
  const basicInfo = document.getElementById("basicInfo");
  const notificationsSettings = document.getElementById(
    "notificationsSettings"
  );
  const securityCard = document.getElementById("securityCard");

  basicInfo.classList.add("hide_tab");
  notificationsSettings.classList.add("hide_tab");
  securityCard.classList.remove("hide_tab");

  const basicInfoTabBtn = document.getElementById("basicInfoTabBtn");
  const notifyTabBtn = document.getElementById("notifyTabBtn");
  const securityTabBtn = document.getElementById("securityTabBtn");

  basicInfoTabBtn.classList.remove("active_profile_tab");
  notifyTabBtn.classList.remove("active_profile_tab");
  securityTabBtn.classList.add("active_profile_tab");
};

// HANDLE FAQS

const revealFaqDesc = () => {
  const faqDescs = document.querySelectorAll(".faq_dropdown_body");

  console.log(faqDescs);
  faqDescs.forEach((faqDesc) => {
    faqDesc.classList.toggle("hide_tab");
  });
};

// Support Menu tab toggling

const supportMessage = document.getElementById("supportMessage");
const supportContact = document.getElementById("supportContact");
const supportFaq = document.getElementById("supportFaq");

const switchMessageTab = () => {
  const supportMessage = document.getElementById("supportMessage");
  const supportContact = document.getElementById("supportContact");
  const supportFaq = document.getElementById("supportFaq");
  const switchmessageBtn = document.getElementById("switchmessageBtn");
  const switchContactBtn = document.getElementById("switchContactBtn");
  const switchFaqsBtn = document.getElementById("switchFaqsBtn");

  supportMessage.classList.remove("hide_tab");
  supportContact.classList.add("hide_tab");
  supportFaq.classList.add("hide_tab");
  switchmessageBtn.classList.add("active_profile_tab");
  switchContactBtn.classList.remove("active_profile_tab");
  switchFaqsBtn.classList.remove("active_profile_tab");
};

const switchContactTab = () => {
  const supportMessage = document.getElementById("supportMessage");
  const supportContact = document.getElementById("supportContact");
  const supportFaq = document.getElementById("supportFaq");

  const switchmessageBtn = document.getElementById("switchmessageBtn");
  const switchContactBtn = document.getElementById("switchContactBtn");
  const switchFaqsBtn = document.getElementById("switchFaqsBtn");

  supportMessage.classList.add("hide_tab");
  supportContact.classList.remove("hide_tab");
  supportFaq.classList.add("hide_tab");

  switchmessageBtn.classList.remove("active_profile_tab");
  switchContactBtn.classList.add("active_profile_tab");
  switchFaqsBtn.classList.remove("active_profile_tab");
};

const switchFaqTab = () => {
  const supportMessage = document.getElementById("supportMessage");
  const supportContact = document.getElementById("supportContact");
  const supportFaq = document.getElementById("supportFaq");

  const switchmessageBtn = document.getElementById("switchmessageBtn");
  const switchContactBtn = document.getElementById("switchContactBtn");
  const switchFaqsBtn = document.getElementById("switchFaqsBtn");

  supportMessage.classList.add("hide_tab");
  supportContact.classList.add("hide_tab");
  supportFaq.classList.remove("hide_tab");

  switchmessageBtn.classList.remove("active_profile_tab");
  switchContactBtn.classList.remove("active_profile_tab");
  switchFaqsBtn.classList.add("active_profile_tab");
};

// LOGIN PAGE SCRIPT

function switchEmailLogin() {
  console.log("aba");
  const emailLoginBtn = document.getElementById("emailLoginBtn");
  const phoneLoginBtn = document.getElementById("phoneLoginBtn");
  const emailLoginForm = document.getElementById("emailLoginForm");
  const phoneLoginForm = document.getElementById("phoneLoginForm");

  emailLoginForm.classList.remove("hide_loginForm");
  phoneLoginForm.classList.add("hide_loginForm");
  emailLoginBtn.classList.add("sl_active");
  phoneLoginBtn.classList.remove("sl_active");
}

function switchPhoneLogin() {
  const emailLoginBtn = document.getElementById("emailLoginBtn");
  const phoneLoginBtn = document.getElementById("phoneLoginBtn");
  const emailLoginForm = document.getElementById("emailLoginForm");
  const phoneLoginForm = document.getElementById("phoneLoginForm");

  emailLoginForm.classList.add("hide_loginForm");
  phoneLoginForm.classList.remove("hide_loginForm");
  emailLoginBtn.classList.remove("sl_active");
  phoneLoginBtn.classList.add("sl_active");
}

function aba() {
  console.log("aba");
}

// VERIFY PAGE FORM PIN INPUT LOGIC

// $(function () {
//   "use strict";

//   var body = $("body");

//   function goToNextInput(e) {
//     var key = e.which,
//       t = $(e.target),
//       sib = t.next("input");

//     if (key != 9 && (key < 48 || key > 57)) {
//       e.preventDefault();
//       return false;
//     }

//     if (key === 9) {
//       return true;
//     }

//     if (!sib || !sib.length) {
//       sib = body.find("input").eq(0);
//     }
//     sib.select().focus();
//   }

//   function onKeyDown(e) {
//     var key = e.which;

//     if (key === 9 || (key >= 48 && key <= 57)) {
//       return true;
//     }

//     e.preventDefault();
//     return false;
//   }

//   function onFocus(e) {
//     $(e.target).select();
//   }

//   body.on("keyup", "input", goToNextInput);
//   body.on("keydown", "input", onKeyDown);
//   body.on("click", "input", onFocus);
// });

// =========================GLOBAL TRANSFER PAGE

const globalTransferPages = {
  page1: `<div id="page1"  class="singleTransfer_Page1">
  <div class="exchange_Rate_box">
    <p>Exchange Rate:</p>
    <p>750 NGN = 1 USD</p>
  </div>
  <!-- country/amount converter input -->
  <div class="country_amount_box">
    <p class="send_amount">₦0</p>
    <label>Country/amount to send</label>
    <input
      type="text"
      placeholder="NGN"
      class="country_amount_input"
      readonly
    />
    <!-- Modal for currency converter -->
    <div class="tfc_currency_options">
      <div class="tfc_currency_btn usa_btn">
        <div class="tfc_c_btn_left">
          <img src="./../assets/USA.png" alt="USA" />
          <span>United states</span>
        </div>
        <span>USD</span>
      </div>
      <div class="tfc_currency_btn uk_btn">
        <div class="tfc_c_btn_left">
          <img src="./../assets/britain.png" alt="UK" />
          <span>United Kingdom</span>
        </div>
        <span>GBP</span>
      </div>
      <div class="tfc_currency_btn india_btn">
        <div class="tfc_c_btn_left">
          <img src="./../assets/india.png" alt="india" />
          <span>India</span>
        </div>
        <span>INR</span>
      </div>
      <div class="tfc_currency_btn india2_btn">
        <div class="tfc_c_btn_left">
          <img src="./../assets/india.png" alt="india" />
          <span>India</span>
        </div>
        <span>USD</span>
      </div>
      <div class="tfc_currency_btn china_btn">
        <div class="tfc_c_btn_left">
          <img src="./../assets/china.png" alt="china" />
          <span>China</span>
        </div>
        <span>YUAN</span>
      </div>
      <div class="tfc_currency_btn china2_btn">
        <div class="tfc_c_btn_left">
          <img src="./../assets/china.png" alt="china" />
          <span>China</span>
        </div>
        <span>USD</span>
      </div>
      <div class="tfc_currency_btn china2_btn">
        <div class="tfc_c_btn_left">
          <img src="./../assets/nigeria.png" alt="china" />
          <span>Nigeria</span>
        </div>
        <span>NGN</span>
      </div>
    </div>
    <!-- end of Modal for currency converter -->
  </div>
      <!-- select receipient input -->
      <div class="country_amount_box">
        <p class="send_amount">¥2,985.47</p>
        <label>Select recipient country/currency</label>
        <input
          type="text"
          placeholder="YUAN"
          class="country_amount_input"
          readonly
        />
        <!-- Modal for currency converter -->
        <div class="tfc_currency_options">
          <div class="tfc_currency_btn usa_btn">
            <div class="tfc_c_btn_left">
              <img src="./../assets/USA.png" alt="USA" />
              <span>United states</span>
            </div>
            <span>USD</span>
          </div>
          <div class="tfc_currency_btn uk_btn">
            <div class="tfc_c_btn_left">
              <img src="./../assets/britain.png" alt="UK" />
              <span>United Kingdom</span>
            </div>
            <span>GBP</span>
          </div>
          <div class="tfc_currency_btn india_btn">
            <div class="tfc_c_btn_left">
              <img src="./../assets/india.png" alt="india" />
              <span>India</span>
            </div>
            <span>INR</span>
          </div>
          <div class="tfc_currency_btn india2_btn">
            <div class="tfc_c_btn_left">
              <img src="./../assets/india.png" alt="india" />
              <span>India</span>
            </div>
            <span>USD</span>
          </div>
          <div class="tfc_currency_btn china_btn">
            <div class="tfc_c_btn_left">
              <img src="./../assets/china.png" alt="china" />
              <span>China</span>
            </div>
            <span>YUAN</span>
          </div>
          <div class="tfc_currency_btn china2_btn">
            <div class="tfc_c_btn_left">
              <img src="./../assets/china.png" alt="china" />
              <span>China</span>
            </div>
            <span>USD</span>
          </div>
          <div class="tfc_currency_btn china2_btn">
            <div class="tfc_c_btn_left">
              <img src="./../assets/nigeria.png" alt="china" />
              <span>Nigeria</span>
            </div>
            <span>NGN</span>
          </div>
        </div>
        
      </div>
      <div class="feeTransferBoard">
        <div class="fee_line">
          <div class="fl_left"><p>Fee</p></div>
          <div class="fl_right"><p style="font-weight: 600;">5,694 NGN</p></div>
        </div>
        <div class="fee_line">
          <div class="fl_left"><p>Transfer time</p></div>
          <div class="fl_right"><p style="font-weight: 600;">Within 24 hours</p><button title="Excludes weekends & Public holidays" class="info_btn"><span class="material-symbols-rounded">
            info
            </span></button></div>
            <!-- Additional info board -->
            
        </div>
        <div class="fee_line"></div>
      </div>
      <div class="feeTransferBoard">
        <div class="fee_line">
          <div class="fl_left"><p>Amount to pay</p></div>
          <div class="fl_right"><p style="font-weight: 600;">205,694 NGN</p></div>
        </div>
        <div class="fee_line">
          <div class="fl_left"><p>Recipient gets</p></div>
          <div class="fl_right"><p style="font-weight: 600;">2,985.47 YUAN</p></div>
        </div>
        <div class="fee_line"></div>
      </div>
      <button onclick='handlePageTwo()' id='pageOneBtn' class="page_progress_btn">Continue</button>
</div>`,
  page2: ` <div id="page2" class="singleTransfer_Page2">
  <p>Recipients account detail (paste payment details as copied)</p>
  <textarea class="" rows="12" cols="12" placeholder="paste details"></textarea>
  <div class="invoice_upload_area">
    <p>Upload Invoices</p>
    <p>Click to upload proforma invoices and invoices (optional)</p>
    <div class="invoice_upload_box">
      <div class="invoice_upload_box_btn"><span class="material-symbols-rounded">
        upload
        </span>upload invoice</div>
      <input  type="file"/>
    </div>
    <button onclick='handlePageThree()' id='pageTwoBtn' class="page_progress_btn">Continue</button>
  </div>
</div>`,
  page3: `<div id="page3" class="singleTransfer_Page3">
  <div class="bank_details_summary_card">
    <h6>Bank Details To Pay Your Money Into</h6>
    <div class="bank_details_content">
      <div class="bank_detail">
        <p>Bank name:</p>
        <p>Wema Bank</p>
      </div>
      <div class="bank_detail">
        <p>Account name:</p>
        <p>James Alimo-Swifia</p>
      </div>
      <div class="bank_detail">
        <p>Account number:</p>
        <div class="copy_bank_details">
          <p>7902058884</p>
          <button class="copy_button">
            copy
            <span class="material-symbols-rounded">
              content_copy
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="recipients_summary_details">
    <p>Recipients account detail</p>
    <div class="bank_details_summary_card bds_blocks_container">
      <div class="bds_block">
        <p>BENEFICIARY : ALPA LABORATORIES LTD.</p>
        <p>Add: 33/2 AGRA BOMBAY ROAD, PIGDAMBER , INDORE</p>
        <p>EMAIL: pchawla@alpalabs.in</p>
        <p>Phone : +91 9893355336</p>
      </div>
      <div class="bds_block">
        <p>ACCOUNT NO. : 556011037074</p>
      </div>
      <div class="bds_block">
        <p>BANK DETAILS</p>
        <p>
          KOTAK MAHINDRA BANK, 10 M.G.Road INDORE BRANCH INDORE
          (MP) INDIA
        </p>
      </div>
      <div class="bds_block">
        <p>SWIFT CODE : KKBKINBBXXX</p>
        <p>IFSC : KKBK0005933</p>
      </div>
      <div class="bds_block">
        <p>PAYMENT ROUTING : THE BANK OF NEW YORK MELLON</p>
        <p>SWIFT CODE : IRVTUS3NXXX</p>
        <p>ACCOUNT NO.: 8900517794</p>
      </div>
    </div>
  </div>
  <div class="invoice_upload_area">
    <p>Upload Invoices</p>
    <p>
      Click to change proforma invoices and invoices (optional)
    </p>
    <div class="invoice_upload_box">
      <div class="invoice_upload_box_btn">
        <span class="material-symbols-rounded"> upload </span
        >upload invoice
      </div>
      <input type="file" />
    </div>
  </div>

  <div class="bank_details_summary_card">
    <div class="sum_head">
      <h5>Summary</h5>
      <p>1 NGN = 0.015 YUAN</p>
    </div>
    <div class="bds_internal_card">
      <div class="sum_head">
        <h6>Payment Summary</h6>
        <button>
          <span class="material-symbols-rounded"> edit </span
          >Edit
        </button>
      </div>
      <div class="originating_country flank_detail">
        <p>Originating Country</p>
        <p>Nigeria</p>
      </div>
      <div class="originating_country flank_detail">
        <p>Amount to send</p>
        <p>200,000 NGN</p>
      </div>
      <div class="originating_country flank_detail">
        <p>Amount to pay</p>
        <p>205,694 NGN</p>
      </div>
      <div class="originating_country flank_detail">
        <p>Fee</p>
        <p>5, 694 NGN</p>
      </div>
      <div class="originating_country flank_detail">
        <p>Recipients Country</p>
        <p>China</p>
      </div>
      <div class="receiving_amount">
        <h6>Amount to receive</h6>
        <h6>2,985.47 YUAN</h6>
      </div>
    </div>
  </div>

  <button onclick='handlePageFour()' id='pageThreeBtn' class="page_progress_btn">Initiate payment</button>
</div>`,
  page4: `    <div id="page4" class="singleTransfer_Page4">
  <h5>Send Money</h5>
  <p>
    Kindly ensure that you initiate a transfer of the desired
    amount to the following specified account details. Upon
    successful receipt of the payment, your transfer request
    will be promptly processed and you will be notified via an
    official confirmation.
  </p>
  <div class="pay_details_card">
    <h6>Bank Details To Pay Your Money Into</h6>
    <div class="pay_details_card_details">
      <div class="bank_detail">
        <p>Bank name:</p>
        <p>Wema Bank</p>
      </div>
      <div class="bank_detail">
        <p>Account name:</p>
        <p>James Alimo-Swifia</p>
      </div>
      <div class="bank_detail">
        <p>Account number:</p>
        <div class="copy_bank_details">
          <p>7902058884</p>
          <button class="copy_button">
            copy
            <span class="material-symbols-rounded">
              content_copy
            </span>
          </button>
        </div>
      </div>
      <div class="bank_detail transfer_amount">
        <h6>Total Amount to be transferred</h6>
        <h6 NGN>205,694 NGN</h6>
      </div>
    </div>
    <!-- successful payment -->
    <div id="globalSuccessModal" class="global_success_pay_card">
      <div class="global_success_pay">
        <img src='./../assets/Check.png'/>
        <p>Global Payment Request
          Submitted Successfully!</p>
          <button onclick="hideGlobalModal()" class="page_progress_btn">close</button>
      </div>
    </div>
  </div>
  <button onclick="showGlobalModal()" id="finalPayBtn" class="page_progress_btn">Initiate payment</button>
</div>`,
  page5: `<div id="page1"  class="singleTransfer_Page1">
  <div class="exchange_Rate_box">
    <p>Exchange Rate:</p>
    <p>750 NGN = 1 USD</p>
  </div>
  <!-- country/amount converter input -->
  <div class="country_amount_box">
    <p class="send_amount">₦0</p>
    <label>Country/amount to send</label>
    <input
      type="text"
      placeholder="NGN"
      class="country_amount_input"
      readonly
    />
    <!-- Modal for currency converter -->
    <div class="tfc_currency_options">
      <div class="tfc_currency_btn usa_btn">
        <div class="tfc_c_btn_left">
          <img src="./../assets/USA.png" alt="USA" />
          <span>United states</span>
        </div>
        <span>USD</span>
      </div>
      <div class="tfc_currency_btn uk_btn">
        <div class="tfc_c_btn_left">
          <img src="./../assets/britain.png" alt="UK" />
          <span>United Kingdom</span>
        </div>
        <span>GBP</span>
      </div>
      <div class="tfc_currency_btn india_btn">
        <div class="tfc_c_btn_left">
          <img src="./../assets/india.png" alt="india" />
          <span>India</span>
        </div>
        <span>INR</span>
      </div>
      <div class="tfc_currency_btn india2_btn">
        <div class="tfc_c_btn_left">
          <img src="./../assets/india.png" alt="india" />
          <span>India</span>
        </div>
        <span>USD</span>
      </div>
      <div class="tfc_currency_btn china_btn">
        <div class="tfc_c_btn_left">
          <img src="./../assets/china.png" alt="china" />
          <span>China</span>
        </div>
        <span>YUAN</span>
      </div>
      <div class="tfc_currency_btn china2_btn">
        <div class="tfc_c_btn_left">
          <img src="./../assets/china.png" alt="china" />
          <span>China</span>
        </div>
        <span>USD</span>
      </div>
      <div class="tfc_currency_btn china2_btn">
        <div class="tfc_c_btn_left">
          <img src="./../assets/nigeria.png" alt="china" />
          <span>Nigeria</span>
        </div>
        <span>NGN</span>
      </div>
    </div>
    <!-- end of Modal for currency converter --> 
  </div>
      <!-- select receipient input -->
      <div class="country_amount_box">
        <p class="send_amount">¥2,985.47</p>
        <label>Select recipient country/currency</label>
        <input
          type="text"
          placeholder="YUAN"
          class="country_amount_input"
          readonly
        />
        <!-- Modal for currency converter -->
        <div class="tfc_currency_options">
          <div class="tfc_currency_btn usa_btn">
            <div class="tfc_c_btn_left">
              <img src="./../assets/USA.png" alt="USA" />
              <span>United states</span>
            </div>
            <span>USD</span>
          </div>
          <div class="tfc_currency_btn uk_btn">
            <div class="tfc_c_btn_left">
              <img src="./../assets/britain.png" alt="UK" />
              <span>United Kingdom</span>
            </div>
            <span>GBP</span>
          </div>
          <div class="tfc_currency_btn india_btn">
            <div class="tfc_c_btn_left">
              <img src="./../assets/india.png" alt="india" />
              <span>India</span>
            </div>
            <span>INR</span>
          </div>
          <div class="tfc_currency_btn india2_btn">
            <div class="tfc_c_btn_left">
              <img src="./../assets/india.png" alt="india" />
              <span>India</span>
            </div>
            <span>USD</span>
          </div>
          <div class="tfc_currency_btn china_btn">
            <div class="tfc_c_btn_left">
              <img src="./../assets/china.png" alt="china" />
              <span>China</span>
            </div>
            <span>YUAN</span>
          </div>
          <div class="tfc_currency_btn china2_btn">
            <div class="tfc_c_btn_left">
              <img src="./../assets/china.png" alt="china" />
              <span>China</span>
            </div>
            <span>USD</span>
          </div>
          <div class="tfc_currency_btn china2_btn">
            <div class="tfc_c_btn_left">
              <img src="./../assets/nigeria.png" alt="china" />
              <span>Nigeria</span>
            </div>
            <span>NGN</span>
          </div>
        </div>
        
      </div>
      <div class="feeTransferBoard">
        <div class="fee_line">
          <div class="fl_left"><p>Fee</p></div>
          <div class="fl_right"><p style="font-weight: 600;">5,694 NGN</p></div>
        </div>
        <div class="fee_line">
          <div class="fl_left"><p>Transfer time</p></div>
          <div class="fl_right"><p style="font-weight: 600;">Within 24 hours</p><button title="Excludes weekends & Public holidays" class="info_btn"><span class="material-symbols-rounded">
            info
            </span></button></div>
            <!-- Additional info board -->
            
        </div>
        <div class="fee_line"></div>
      </div>
      <div class="feeTransferBoard">
        <div class="fee_line">
          <div class="fl_left"><p>Amount to pay</p></div>
          <div class="fl_right"><p style="font-weight: 600;">205,694 NGN</p></div>
        </div>
        <div class="fee_line">
          <div class="fl_left"><p>Recipient gets</p></div>
          <div class="fl_right"><p style="font-weight: 600;">2,985.47 YUAN</p></div>
        </div>
        <div class="fee_line"></div>
      </div>
      <button onclick='handlePageSix()' id='pageOneBtn' class="page_progress_btn">Continue</button>
</div>`,
  page6: `<h1>This is page6</h1>`,
  page7: `<h1>This is page7</h1>`,
  page8: `<h1>This is page8</h1>`,
};

function renderGlobalPages(page) {
  console.log(page);
  document.getElementById("tfcBodyId").innerHTML = globalTransferPages[page];
}

renderGlobalPages("page1");

function handlePageTwo() {
  console.log("papa2");
  renderGlobalPages("page2");
}

function handlePageThree() {
  console.log("papa3");
  renderGlobalPages("page3");
}
function handlePageFour() {
  console.log("papa4");
  renderGlobalPages("page4");
}
function handlePageSix() {
  console.log("papa6");
  renderGlobalPages("page6");
}

// TOGGLE SINGLE OR BULK TRANSFER RADIO BUTTONS

function handleChange(n) {
  const pageOne = document.querySelectorAll("page1");
  const pageFive = document.querySelectorAll("page5");

  if (n === 1) {
    renderGlobalPages("page1");
  } else if (n === 5) {
    renderGlobalPages("page5");
  }
}

// Global SUCCESS PAY MODAL

function showGlobalModal() {
  const finalPayBtn = document.getElementById("finalPayBtn");
  const globalSuccessModal = document.getElementById("globalSuccessModal");
  globalSuccessModal.style.display = "flex";
}
function hideGlobalModal() {
  const finalPayBtn = document.getElementById("finalPayBtn");
  const globalSuccessModal = document.getElementById("globalSuccessModal");
  globalSuccessModal.style.display = "none";
}
