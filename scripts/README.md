# GSC (Google Search Console) tooling

Service-account orqali Search Console API'dan ma'lumot tortib oladi. Tashqi paket kerak emas — Node'ning ichki `crypto` + `fetch`.

## Sozlash
- Kalit fayl: `scripts/gsc-key.json` (gitignore qilingan — commit qilinmaydi).
- Boshqa joydagi kalitni ishlatish: `GSC_KEY_FILE=/path/key.json node scripts/gsc.mjs ...`
- Service account GSC'da **owner**: `claude-gsc@cellular-gift-384816.iam.gserviceaccount.com`

## Buyruqlar
```bash
# Qaysi propertylarga kira oladi
node scripts/gsc.mjs sites

# Bitta so'rov (siteUrl, kunlar, o'lchamlar, qatorlar)
node scripts/gsc.mjs query "sc-domain:uzgets.uz" 28 query 100
node scripts/gsc.mjs query "sc-domain:uzgets.uz" 28 query,page 200

# To'liq paket → scripts/gsc-data/ ichiga JSON saqlaydi
node scripts/gsc.mjs report "sc-domain:uzgets.uz" 90
```

`gsc-data/` ichidagi fayllar (gitignore): `queries`, `pages`, `query-page`, `countries`, `devices`, `_meta`.

> GSC ma'lumoti ~2-3 kun kechikadi. Skript shuning uchun `endDate`ni "kecha"dan emas, ~1 kun oldindan oladi.
