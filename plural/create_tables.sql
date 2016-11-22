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


COPY business FROM 'C:\ComputerScience_WINDOWS\2014_CodeStudies\plural\business.txt' DELIMITER ',' CSV;
COPY creative FROM 'C:\ComputerScience_WINDOWS\2014_CodeStudies\plural\creative.txt' DELIMITER ',' CSV;
COPY data FROM 'C:\ComputerScience_WINDOWS\2014_CodeStudies\plural\data.txt' DELIMITER ',' CSV;
COPY itops FROM 'C:\ComputerScience_WINDOWS\2014_CodeStudies\plural\itops.txt' DELIMITER ',' CSV;
COPY security FROM 'C:\ComputerScience_WINDOWS\2014_CodeStudies\plural\security.txt' DELIMITER ',' CSV;
COPY software FROM 'C:\ComputerScience_WINDOWS\2014_CodeStudies\plural\software.txt' DELIMITER ',' CSV;

COPY current_file_counts FROM 'C:\ComputerScience_WINDOWS\2014_CodeStudies\plural\software.txt' DELIMITER ',' CSV;
COPY expected_file_counts FROM 'C:\ComputerScience_WINDOWS\2014_CodeStudies\plural\software.txt' DELIMITER ',' CSV;

