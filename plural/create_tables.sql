CREATE TABLE IF NOT EXISTS business (
  full_name TEXT,
  ps_name TEXT
);
CREATE TABLE IF NOT EXISTS creative (
  full_name TEXT,
  ps_name TEXT
);
CREATE TABLE IF NOT EXISTS data (
  full_name TEXT,
  ps_name TEXT
);
CREATE TABLE IF NOT EXISTS itops (
  full_name TEXT,
  ps_name TEXT
);
CREATE TABLE IF NOT EXISTS security (
  full_name TEXT,
  ps_name TEXT
);
CREATE TABLE IF NOT EXISTS software (
  full_name TEXT,
  ps_name TEXT
);

CREATE TABLE IF NOT EXISTS current_file_counts (
  full_name TEXT,
  file_count INT
);

CREATE TABLE IF NOT EXISTS expected_file_counts (
  ps_name TEXT,
  file_count INT
);


COPY business FROM '/Users/mitchell_verter/Projects/2014_CodeStudies/plural/business.txt' DELIMITER ',' CSV;
COPY creative FROM '/Users/mitchell_verter/Projects/2014_CodeStudies/plural/creative.txt' DELIMITER ',' CSV;
COPY data FROM '/Users/mitchell_verter/Projects/2014_CodeStudies/plural/data.txt' DELIMITER ',' CSV;
COPY itops FROM '/Users/mitchell_verter/Projects/2014_CodeStudies/plural/itops.txt' DELIMITER ',' CSV;
COPY security FROM '/Users/mitchell_verter/Projects/2014_CodeStudies/plural/security.txt' DELIMITER ',' CSV;
COPY software FROM '/Users/mitchell_verter/Projects/2014_CodeStudies/plural/software.txt' DELIMITER ',' CSV;

COPY current_file_counts FROM '/Users/mitchell_verter/Projects/2014_CodeStudies/plural/current_file_counts.txt' DELIMITER ',' CSV;
COPY expected_file_counts FROM '/Users/mitchell_verter/Projects/2014_CodeStudies/plural/expected_file_counts.txt' DELIMITER ',' CSV;

