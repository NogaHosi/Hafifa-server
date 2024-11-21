DROP TABLE social_security_numbers;

CREATE TABLE social_security_numbers(
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_8 TEXT NOT NULL,
  CONSTRAINT first_8 CHECK (first_8 ~ '^[0-9]{8}$'),
  last_digit INT NOT NULL,
  CONSTRAINT last_digit CHECK (last_digit BETWEEN 0 AND 9),
  total_id TEXT NOT NULL,
  CONSTRAINT total_id CHECK (total_id ~ '^[0-9]{8}$'),
  UNIQUE(id)
);