import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Collapse } from '@alfalab/core-components/collapse';
import { Gap } from '@alfalab/core-components/gap';
import { PureCell } from '@alfalab/core-components/pure-cell';
import { Typography } from '@alfalab/core-components/typography';
import { ChevronDownMIcon } from '@alfalab/icons-glyph/ChevronDownMIcon';
import { ChevronUpMIcon } from '@alfalab/icons-glyph/ChevronUpMIcon';
import { useEffect, useState } from 'react';
import hb from './assets/hb.png';
import heart from './assets/heart.png';
import house from './assets/house.png';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';

const faqs = [
  {
    question: 'Как активировать подписку и когда она начнет действовать?',
    answer:
      'Подписка активируется автоматически сразу после оформления. Преимущества, включая сделки без комиссии и доступ к аналитике, становятся доступны в течение 1 рабочего дня',
  },
  {
    question: 'Что значит «3 сделки без комиссии»? Есть ли ограничения по сумме или инструментам?',
    answer:
      'Вы получаете 3 сделки без брокерской комиссии на любые биржевые инструменты (акции, облигации, фонды) в рамках брокерского счета. Ограничений по сумме сделки нет. Сделки должны быть совершены в течение 30 дней после пополнения счета на сумму от 10 000 ₽',
  },
  {
    question: 'Что произойдет, если я выведу деньги до истечения 30 дней?',
    answer:
      'Чтобы получить право на 3 сделки без комиссии, необходимо удерживать сумму от 10 000 ₽ на брокерском счете не менее 30 календарных дней. При досрочном выводе бонус аннулируется',
  },
  {
    question: 'Как часто я буду получать аналитические обзоры и в каком формате?',
    answer:
      'Обзоры публикуются один раз в месяц и доступны в формате PDF и онлайн-статьи в вашем личном кабинете. Мы также отправим уведомление на электронную почту',
  },
  {
    question: 'Как происходит розыгрыш денежных призов?',
    answer:
      'Каждый месяц мы случайным образом выбираем 1 000 победителей среди активных подписчиков. Призы варьируются от 500 ₽ до 100 000 ₽. Выплаты осуществляются до конца следующего месяца на ваш брокерский счет',
  },
];

const LINK = 'alfabank://longread?endpoint=v1/adviser/longreads/60683';

if (LS.getItem(LSKeys.ShowThx, false)) {
  window.location.replace(LINK);
}

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [collapsedItems, setCollapsedItem] = useState<string[]>([]);

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const submit = () => {
    window.gtag('event', '5192_add_var5');
    setLoading(true);

    LS.setItem(LSKeys.ShowThx, true);
    setLoading(false);
    window.location.replace(LINK);
  };

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <img src={hb} width={120} height={120} />
          <Typography.TitleResponsive color="primary-inverted" tag="h1" view="medium" font="system" weight="semibold">
            Смарт Инвестиции
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" color="primary-inverted">
            30 дней бесплатно, далее — 99 ₽ в месяц
          </Typography.Text>
        </div>

        <Typography.TitleResponsive
          color="primary-inverted"
          style={{ marginTop: '1rem' }}
          tag="h2"
          view="small"
          font="system"
          weight="semibold"
        >
          Что вы получите
        </Typography.TitleResponsive>

        <PureCell className={appSt.cell}>
          <PureCell.Graphics verticalAlign="center">
            <img src={house} width={48} height={48} alt="house" />
          </PureCell.Graphics>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.TitleResponsive color="primary-inverted" tag="h3" view="xsmall" font="system" weight="semibold">
                5 сделок без комиссии
              </Typography.TitleResponsive>

              <Typography.Text view="primary-small" color="secondary-inverted">
                Для сделок до 3 000 ₽
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
        </PureCell>

        <PureCell className={appSt.cell}>
          <PureCell.Graphics verticalAlign="center">
            <img src={heart} width={48} height={48} alt="heart" />
          </PureCell.Graphics>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.TitleResponsive color="primary-inverted" tag="h3" view="xsmall" font="system" weight="semibold">
                Участие в розыгрыше 1 млн ₽
              </Typography.TitleResponsive>

              <Typography.Text view="primary-small" color="secondary-inverted">
                Каждый месяц 1000 победителей. Призы от 500 до 100 000 ₽
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
        </PureCell>

        <Typography.TitleResponsive
          color="primary-inverted"
          style={{ marginTop: '1rem' }}
          tag="h2"
          view="small"
          font="system"
          weight="semibold"
        >
          Подписка бесплатно всегда
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium" color="secondary-inverted">
          если пополнить любой брокерский счет на сумму от 10 000 ₽ и удерживать её в течение 30 дней - подписка бесплатна до
          момента снижения остатков
        </Typography.Text>

        <Typography.TitleResponsive
          color="primary-inverted"
          style={{ marginTop: '1rem' }}
          tag="h2"
          view="small"
          font="system"
          weight="semibold"
        >
          Частые вопросы
        </Typography.TitleResponsive>

        {faqs.map((faq, index) => (
          <div style={{ marginTop: '1rem' }} key={index}>
            <div
              onClick={() => {
                window.gtag('event', `5192_FAQ${index + 1}_var5`);

                setCollapsedItem(items =>
                  items.includes(String(index + 1))
                    ? items.filter(item => item !== String(index + 1))
                    : [...items, String(index + 1)],
                );
              }}
              className={appSt.row}
            >
              <Typography.Text view="primary-medium" weight="medium" color="primary-inverted">
                {faq.question}
              </Typography.Text>
              {collapsedItems.includes(String(index + 1)) ? (
                <div style={{ flexShrink: 0 }}>
                  <ChevronUpMIcon color="#FFFFFF" />
                </div>
              ) : (
                <div style={{ flexShrink: 0 }}>
                  <ChevronDownMIcon color="#FFFFFF" />
                </div>
              )}
            </div>
            <Collapse expanded={collapsedItems.includes(String(index + 1))}>
              <Typography.Text view="primary-medium" color="secondary-inverted">
                {faq.answer}
              </Typography.Text>
            </Collapse>
          </div>
        ))}
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          loading={loading}
          block
          view="primary"
          onClick={submit}
          style={{ backgroundColor: '#FFFFFF', color: '#030306E0' }}
        >
          Попробовать бесплатно
        </ButtonMobile>
      </div>
    </>
  );
};
