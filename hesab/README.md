# حیسابکەری بڕینی پەرگۆلا — Pergola Kesim Hesabı

```
hesab/index.html      ئامرازەکە — تاکە فایل (React لەناویدایە)
hesab/logo-icon.png   ئایکۆنی تابەکە
```

فایلەکە تەواو سەربەخۆیە: هیچ بیلدێک، هیچ `npm install`ێک، هیچ سێرڤەرێک ناوێت.
تەنها شتی دەرەکی فۆنتی Zain ـە لە Google Fonts.

## بڵاوکردنەوە لەسەر Cloudflare Pages

**وەک سایتێکی سەربەخۆ (پڕۆژەیەکی نوێی Pages):**

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git**
2. ڕیپۆی `catalogue` هەڵبژێرە
3. لە Build settings:
   - Framework preset: **None**
   - Build command: **بەتاڵی بهێڵەوە**
   - Build output directory: `/`
   - Root directory (advanced): `hesab`
4. **Save and Deploy**

ئەنجام: ناونیشانێکی سەربەخۆی خۆی وەردەگرێت، وەک
`pergola-hesab.pages.dev`. دواتر لە Custom domains دەتوانیت دۆمەینی
خۆت زیاد بکەیت (بۆ نموونە `hesab.wlatshade.com`).

> تێبینی: چونکە فایلەکە لەناو هەمان ڕیپۆدایە، پڕۆژەی کەتەلۆگیش
> لە `/hesab/` دا خزمەتی دەکات. ئەگەر ئەوەت نەوێت، پۆشەی `hesab`
> بگوێزەوە بۆ ڕیپۆیەکی سەربەخۆ و لە پلەی ٢ دا ئەو ڕیپۆیە هەڵبژێرە.

## گەڕان لە گووگڵدا

لە ئێستادا `<meta name="robots" content="noindex" />` ی تێدایە، واتە
گووگڵ ئەم لاپەڕەیە ئیندێکس ناکات. ئەگەر دەتەوێت لە گووگڵدا دەربکەوێت،
ئەو دێڕە لە `index.html` بسڕەوە.
