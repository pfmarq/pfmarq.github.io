const TABS = ['gal_tab', 'cv_tab', 'me_tab'];
const BTNS = ['gal_btn', 'cv_btn', 'me_btn'];
changeTab = new_tab => {
  TABS.forEach(tab => document.getElementById(tab).style.display = 'none');
  document.getElementById(new_tab + '_tab').style.display = '';
  BTNS.forEach(btn => document.getElementById(btn).style.fontWeight = '');
  document.getElementById(new_tab + '_btn').style.fontWeight = 700;
}
