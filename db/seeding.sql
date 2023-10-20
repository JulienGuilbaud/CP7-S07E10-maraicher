BEGIN;

SET CLIENT_ENCODING TO 'UTF-8';

TRUNCATE TABLE "category", "product";

INSERT INTO "category" ("id", "slug", "title") VALUES
  (1, 'legumes', 'Légumes'),
  (2, 'fruits', 'Fruits'),
  (3, 'champignons', 'Champignons');

INSERT INTO "product" ("slug", "title", "description", "grade", "category_id") VALUES
  ('abricots', 'Abricots', 'Nos abricots sont ceuillis à la main et très savoureux.', 5, 2),
  ('clementines', 'Clémentines', 'Récoltées bien mûres.', 5, 2),
  ('fraises', 'Fraises', 'Parfaites avec de la glace à la vanille.', 3, 2),
  ('framboises', 'Framboises', 'Excellentes en tarte.', 2, 2),
  ('mangues', 'Mangues', 'Une touche d''exotisme.', 4, 2),
  ('myrtilles', 'Myrtilles', 'Elues myrtilles de l''année.', 5, 2),
  ('poires', 'Poires', 'A déguster sans modération.', 3, 2),
  ('pommes', 'Pommes', 'Parfaites en compote.', 4, 2),
  ('asperges', 'Asperges', 'Excellentes avec une touche de mayonnaise.', 3, 1),
  ('aubergines', 'Aubergines', 'Elles raviront vos gratins.', 3, 1),
  ('carottes', 'Carottes', 'Se dégustent rapées ou entières.', 4, 1),
  ('citrouilles', 'Citrouilles', 'En soupe ou pour Halloween.', 5, 1),
  ('patates', 'Patates', 'En raclette, en purée, en gratin, on a le choix.', 5, 1),
  ('petits-pois', 'Petits pois', 'Seuls ou avec des carottes.', 4, 1),
  ('poivrons', 'Poivrons', 'Vert, jaune ou rouge, au choix.', 3, 1),
  ('radis', 'Radis', 'Parfait avec du sel.', 4, 1);

COMMIT;
