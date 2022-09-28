import React from "react";
import PropTypes from "prop-types";

function ToggleTheme(props) {
  
  const { theme, toggleTheme } = props;
  //BELOW: If theme is [ undefined || null || false || 0 || NaN || "" ] > (checks if this is 'falsey')
  //NOTE: Anything that is not falsey, is truthy
  if (!theme) {
    throw new Error("ThemeContext must be used within a ThemeContext.Provider!");
  }

  const styles = {
    backgroundColor: theme.buttonBackground, 
    color: theme.textColor 
  }

  return (   
    <React.Fragment>
      <button style={styles} onClick={toggleTheme}>
        {theme.textColor === "AntiqueWhite" ? "Toggle Light Theme" : "Toggle Dark Theme"}
      </button>
      <hr/>
    </React.Fragment>
  );
}

ToggleTheme.propTypes = {
  toggleTheme: PropTypes.func,
  theme: PropTypes.object
}

export default ToggleTheme;