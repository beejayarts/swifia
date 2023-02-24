// HTML Template for all the dashboard pages

export const pages = {
  dashboard:
    "<h1 style='color:red'>Dashboard</h1><p>This is the dashboard page.</p>",
  accounts: "<h1>ACCOUNTS</h1><p>This is the settings page.</p>",
  transactions: "<h1>transactions</h1><p>This is the reports page.</p>",
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
  support: "<h1>support</h1><p>This is the reports page.</p>",
  logout: "<h1>Logout</h1><p>This is the reports page.</p>",
};
