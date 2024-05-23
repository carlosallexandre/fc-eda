INSERT INTO clients 
  (id, name, email)
VALUES 
  ('cf106ee7-1d88-4ff7-9e55-0a41d9b19582', 'John Doe', 'john@doe.com'),
  ('df593421-b608-413b-8a61-76e5d833c69a', 'Jane Doe', 'jane@doe.com');

INSERT INTO accounts 
  (id, client_id, balance)
VALUES
  ('b8851416-a486-465f-bc14-00dd2eab30c9', 'cf106ee7-1d88-4ff7-9e55-0a41d9b19582', 1000),
  ('91c61fd4-0e44-4bda-9b7e-1a4083c019ea', 'df593421-b608-413b-8a61-76e5d833c69a', 1000);