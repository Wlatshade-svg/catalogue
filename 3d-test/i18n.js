/* WLAT SHADE 3D Studio — interface languages.
 * The page markup and the studio labels are written in English; this file swaps
 * them for Kurdish (Sorani), Turkish or Arabic before the studio starts.
 * Each entry: "English text": [Kurdish, Turkish, Arabic, English (only where the source is not English)].
 * It must load as a plain script at the end of <body>, before the app module runs. */
(function () {
    'use strict';
    var lang = window.__lang || 'ku';
    var COL = { ku: 0, tr: 1, ar: 2, en: 3 }[lang];

    var D = {
        'Skip to content': ['بازدان بۆ ناوەڕۆک', 'İçeriğe geç', 'تخطَّ إلى المحتوى'],
        'Language': ['زمان', 'Dil', 'اللغة'],
        'Request a Quote': ['داواکردنی نرخ', 'Teklif Al', 'اطلب عرض سعر'],
        'Request quote': ['داواکردنی نرخ', 'Teklif al', 'اطلب عرض سعر'],
        'Preparing the 3D scene…': ['دیمەنی 3D ئامادە دەکرێت…', '3D sahne hazırlanıyor…', 'جارٍ تجهيز المشهد ثلاثي الأبعاد…'],
        'Real-time': ['ڕاستەوخۆ', 'Gerçek zamanlı', 'مباشر'],
        'WLAT SHADE 3D Studio': ['ستۆدیۆی 3D وڵات شەید', 'WLAT SHADE 3D Stüdyo', 'استوديو ولات شيد 3D'],
        'Live configurator · RENNU® · Giyotinyum® · Zip': ['دیزاینکەری ڕاستەوخۆ · RENNU® · گیۆتین · زیپ', 'Canlı konfigüratör · RENNU® · Giyotinyum® · Zip', 'مُصمِّم مباشر · RENNU® · جيوتين · زيب'],
        'RENNU® · Giyotinyum® · Zip': ['RENNU® · گیۆتین · زیپ', 'RENNU® · Giyotinyum® · Zip', 'RENNU® · جيوتين · زيب'],
        'Kamera': ['کامێرا', 'Kamera', 'الكاميرا', 'Camera'],
        'Corner': ['گۆشە', 'Köşe', 'زاوية'],
        'Front': ['پێشەوە', 'Ön', 'الأمام'],
        'Top': ['سەرەوە', 'Üst', 'الأعلى'],
        'Inside': ['ناوەوە', 'İç', 'الداخل'],
        'Detail': ['وردەکاری', 'Detay', 'تفاصيل'],
        'Left': ['چەپ', 'Sol', 'اليسار'],
        'Right': ['ڕاست', 'Sağ', 'اليمين'],
        'Louvres': ['لامێلەکان', 'Lameller', 'الشفرات'],
        'Battens': ['چێوەکان', 'Çıtalar', 'العوارض'],
        'modules': ['مۆدیول', 'modül', 'وحدات'],
        'modules:': ['مۆدیول:', 'modül:', 'وحدات:'],
        'Motors:': ['ماتۆڕ:', 'Motor:', 'المحركات:'],
        'System:': ['سیستەم:', 'Sistem:', 'النظام:'],
        'Drag to rotate · scroll or pinch to zoom': ['ڕایبکێشە بۆ سووڕاندن · سکڕۆڵ یان دوو پەنجە بۆ زووم', 'Döndürmek için sürükleyin · yakınlaştırmak için kaydırın', 'اسحب للتدوير · مرّر أو قرّب بإصبعين للتكبير'],
        'Configurator': ['دیزاینکەر', 'Konfigüratör', 'المُصمِّم'],
        'Summary': ['پوختە و نەخشە', 'Özet', 'الملخص'],
        'Share': ['هاوبەشکردن', 'Paylaş', 'مشاركة'],
        'Reset': ['ڕێکخستنەوە', 'Sıfırla', 'إعادة ضبط'],
        'Step': ['هەنگاو', 'Adım', 'الخطوة'],
        'System': ['سیستەم', 'Sistem', 'النظام'],
        'Size': ['قەبارە', 'Ölçü', 'المقاس'],
        'Colour': ['ڕەنگ', 'Renk', 'اللون'],
        'Sides': ['لاکان', 'Yanlar', 'الجوانب'],
        'Light': ['ڕووناکی', 'Işık', 'الإضاءة'],
        'Scene': ['ژینگە', 'Sahne', 'المشهد'],

        'Bioclimatic Pergola': ['پەرگۆلای بایۆکلیماتیک', 'Bioklimatik Pergola', 'برجولا بيوكليماتيك'],
        'Louvres rotate 0–115°; full rain protection when closed': ['لامێلەکان ٠–١١٥° دەسووڕێن؛ کاتی داخستن بە تەواوی لە باران دەپارێزێت', 'Lameller 0–115° döner; kapalıyken tam yağmur koruması', 'الشفرات تدور 0–115°؛ حماية كاملة من المطر عند الإغلاق'],
        'Rolling Roof': ['سەقفی جوڵاو (ڕۆڵینگ ڕووف)', 'Rolling Roof', 'سقف متحرك (رولينغ روف)'],
        'Panels stack with a scissor linkage, roof opens fully': ['پانێڵەکان بە میکانیزمی مقەستی کۆدەبنەوە و سەقفەکە بە تەواوی دەکرێتەوە', 'Paneller makas mekanizmasıyla toplanır, tavan tamamen açılır', 'تتراصّ الألواح بآلية مقصّية ويُفتح السقف بالكامل'],
        'Fabric Pergola (Awning)': ['پەرگۆلای قوماش (تەنتە)', 'Kumaşlı Pergola (Tente)', 'برجولا قماشية (تندة)'],
        'Motorised fabric roof: the fabric folds between LED cornice battens; fabric and batten colours chosen separately': ['سەقفی قوماشی ماتۆڕدار: قوماشەکە لە نێوان چێوە LEDـدارەکاندا دەنووشتێتەوە؛ ڕەنگی قوماش و چێوەکان بە جیا هەڵدەبژێردرێن', 'Motorlu kumaş tavan: kumaş LED\'li korniş çıtaları arasında katlanır; kumaş ve çıta renkleri ayrı seçilir', 'سقف قماشي بمحرك: يُطوى القماش بين عوارض LED؛ يُختار لون القماش والعوارض كلٌّ على حدة'],
        'Winter Garden (Glass Roof)': ['باخچەی زستانە (سەقفی شوشە)', 'Kış Bahçesi (Cam Tavan)', 'حديقة شتوية (سقف زجاجي)'],
        'Fixed glass roof, four-season winter garden': ['سەقفی شوشەی جێگیر، باخچەی زستانە بۆ هەر چوار وەرز', 'Sabit cam tavan, dört mevsim kış bahçesi', 'سقف زجاجي ثابت، حديقة شتوية للفصول الأربعة'],
        'Mounting': ['جۆری دامەزراندن', 'Montaj', 'التثبيت'],
        'Freestanding (4 posts)': ['سەربەخۆ (٤ پایە)', 'Bağımsız (4 dikme)', 'قائم بذاته (4 أعمدة)'],
        'Freestanding, 4 posts per module': ['سەربەخۆ، ٤ پایە بۆ هەر مۆدیولێک', 'Bağımsız, modül başına 4 dikme', 'قائم بذاته، 4 أعمدة لكل وحدة'],
        'Wall-mounted': ['دیواری', 'Duvara montaj', 'مثبت على الجدار'],
        'Rear edge fixed to the wall, front posts only': ['لای پشتەوە بە دیوارەوە دەبەسترێت، تەنها پایەی پێشەوەی هەیە', 'Arka kenar duvara sabitlenir, yalnızca ön dikmeler', 'الحافة الخلفية مثبتة بالجدار، أعمدة أمامية فقط'],

        'Quick sizes': ['قەبارە ئامادەکان', 'Hızlı ölçüler', 'مقاسات سريعة'],
        'Dimensions': ['پێوانەکان', 'Ölçüler', 'الأبعاد'],
        'Width': ['پانی', 'Genişlik', 'العرض'],
        'Projection': ['درێژی', 'Açılım', 'البروز'],
        'Height': ['بەرزی', 'Yükseklik', 'الارتفاع'],
        'Width (mm)': ['پانی (ملم)', 'Genişlik (mm)', 'العرض (مم)'],
        'Projection (mm)': ['درێژی (ملم)', 'Açılım (mm)', 'البروز (مم)'],
        'Height (mm)': ['بەرزی (ملم)', 'Yükseklik (mm)', 'الارتفاع (مم)'],
        'Drag or type the size in millimetres; values snap to 10 mm steps. 1 module = max. 4000 mm front; wider sizes add an intermediate rail and post automatically.': ['قەبارەکە ڕابکێشە یان بە میلیمەتر بینووسە؛ ژمارەکان بە هەنگاوی ١٠ ملم ڕێک دەخرێن. ١ مۆدیول = زۆرترین ٤٠٠٠ ملم لە پێشەوە؛ بۆ قەبارەی پانتر، ڕایەڵ و پایەی ناوەڕاست خۆکارانە زیاد دەبن.', 'Sürükleyin veya ölçüyü milimetre olarak yazın; değerler 10 mm adımlara yuvarlanır. 1 modül = ön cephede en fazla 4000 mm; daha geniş ölçülerde ara ray ve dikme otomatik eklenir.', 'اسحب أو اكتب المقاس بالمليمتر؛ تُقرَّب القيم إلى خطوات 10 مم. الوحدة الواحدة = 4000 مم كحد أقصى للواجهة؛ في المقاسات الأعرض تُضاف سكة وعمود وسطي تلقائياً.'],
        'Roof': ['سەقف', 'Tavan', 'السقف'],
        'Louvre angle': ['گۆشەی لامێل', 'Lamel açısı', 'زاوية الشفرات'],
        'Roof opening': ['کرانەوەی سەقف', 'Tavan açıklığı', 'فتحة السقف'],
        'Open roof': ['کردنەوەی سەقف', 'Tavanı aç', 'افتح السقف'],
        'Close roof': ['داخستنی سەقف', 'Tavanı kapat', 'أغلق السقف'],

        'Profile colour (RAL)': ['ڕەنگی پڕۆفایل (RAL)', 'Profil rengi (RAL)', 'لون البروفيل (RAL)'],
        'Frame colour': ['ڕەنگی چوارچێوە', 'Çerçeve rengi', 'لون الإطار'],
        'All RAL colours and wood effect are applied as electrostatic powder coating (min. 60 µm).': ['هەموو ڕەنگەکانی RAL و شێوەی دار بە بۆیەی پاودەری ئەلیکترۆستاتیک دەکرێن (لانیکەم ٦٠ مایکرۆن).', 'Tüm RAL renkleri ve ahşap desen elektrostatik toz boya ile uygulanır (min. 60 µm).', 'جميع ألوان RAL وتأثير الخشب تُطبَّق بطلاء بودرة إلكتروستاتيكي (60 ميكرون كحد أدنى).'],
        'Separate louvre colour': ['ڕەنگی جیا بۆ لامێل', 'Ayrı lamel rengi', 'لون مستقل للشفرات'],
        'Separate batten colour': ['ڕەنگی جیا بۆ چێوەکان', 'Ayrı çıta rengi', 'لون مستقل للعوارض'],
        'Louvre colour (RAL)': ['ڕەنگی لامێل (RAL)', 'Lamel rengi (RAL)', 'لون الشفرات (RAL)'],
        'Batten colour (RAL)': ['ڕەنگی چێوە (RAL)', 'Çıta rengi (RAL)', 'لون العوارض (RAL)'],
        'When on, frame and louvres are coated in different colours, e.g. a black frame with white or cream louvres.': ['کاتێک چالاک بێت، چوارچێوە و لامێلەکان بە ڕەنگی جیاواز بۆیە دەکرێن، بۆ نموونە چوارچێوەی ڕەش لەگەڵ لامێلی سپی یان کرێمی.', 'Açıkken çerçeve ve lameller farklı renklerde boyanır; örn. siyah çerçeve, beyaz veya krem lameller.', 'عند التفعيل يُطلى الإطار والشفرات بلونين مختلفين، مثل إطار أسود مع شفرات بيضاء أو كريمية.'],
        'Fabric colour': ['ڕەنگی قوماش', 'Kumaş rengi', 'لون القماش'],
        'Blackout fabric: 300 g/m², fire retardant (FR), 2800 mm width; held in the cornice battens by keder.': ['قوماشی بلاکئاوت: ٣٠٠ گم/م²، دژە ئاگر (FR)، پانی ٢٨٠٠ ملم؛ بە کێدەر لە چێوەکاندا جێگیر دەکرێت.', 'Blackout kumaş: 300 g/m², alev geciktirici (FR), 2800 mm en; korniş çıtalarında kederle tutulur.', 'قماش بلاك آوت: 300 غ/م²، مقاوم للحريق (FR)، عرض 2800 مم؛ يُثبَّت في العوارض بالكيدر.'],
        'Ahşap': ['دار', 'Ahşap', 'خشبي', 'Wood'],
        'Ahşap doku': ['شێوەی دار', 'Ahşap doku', 'ملمس خشبي', 'Wood effect'],
        'Krem': ['کرێمی', 'Krem', 'كريمي', 'Cream'],
        'Beyaz': ['سپی', 'Beyaz', 'أبيض', 'White'],
        'Bej': ['بێژ', 'Bej', 'بيج', 'Beige'],
        'Gri': ['خۆڵەمێشی', 'Gri', 'رمادي', 'Grey'],
        'Açık gri': ['خۆڵەمێشیی کاڵ', 'Açık gri', 'رمادي فاتح', 'Light grey'],
        'Antrasit': ['ئەنتراسیت', 'Antrasit', 'أنثراسيت', 'Anthracite'],
        'Grafit': ['گرافیت', 'Grafit', 'غرافيت', 'Graphite'],
        'Gümüş': ['زیوی', 'Gümüş', 'فضي', 'Silver'],
        'Siyah': ['ڕەش', 'Siyah', 'أسود', 'Black'],
        'Bordo': ['بۆردۆ', 'Bordo', 'عنابي', 'Burgundy'],
        'Lacivert': ['شینی تۆخ', 'Lacivert', 'كحلي', 'Navy'],
        'Yeşil': ['سەوز', 'Yeşil', 'أخضر', 'Green'],
        'Kahve': ['قاوەیی', 'Kahve', 'بني', 'Brown'],

        'Side closures': ['داپۆشینی لاکان', 'Yan kapamalar', 'الإغلاقات الجانبية'],
        'Plan view: tap an edge to cycle open → zip → Giyotinyum → wipeable → sliding glass → glass door; on wide structures each module is set separately.': ['نەخشەی سەرەوە: کلیک لە هەر لایەک بکە بۆ گۆڕینی جۆرەکەی: کراوە ← زیپ ← جامی گیۆتین ← گیۆتینی پاککراوە ← شوشەی سلاید ← دەرگای شوشە؛ لە پێکهاتە پانەکاندا هەر مۆدیولێک بە جیا دادەنرێت.', 'Plan görünümü: bir kenara dokunarak açık → zip → Giyotinyum → silinebilir → sürme cam → cam kapı arasında geçiş yapın; geniş yapılarda her modül ayrı ayarlanır.', 'مسقط أفقي: انقر على أي حافة للتبديل بين مفتوح ← زيب ← جيوتين ← قابل للمسح ← زجاج منزلق ← باب زجاجي؛ في الهياكل العريضة تُضبط كل وحدة على حدة.'],
        'Open': ['کراوە', 'Açık', 'مفتوح'],
        'Zip screen': ['زیپ سکرین', 'Zip perde', 'ستارة زيب'],
        'Giyotinyum® Standard': ['جامی گیۆتین (ستاندارد)', 'Giyotinyum® Standart', 'زجاج جيوتين (قياسي)'],
        'Giyotinyum® Wipeable': ['جامی گیۆتین (پاککراوە)', 'Giyotinyum® Silinebilir', 'زجاج جيوتين (قابل للمسح)'],
        'Sliding glass': ['شوشەی سلاید', 'Sürme cam', 'زجاج منزلق'],
        'Glass door': ['دەرگای شوشە', 'Cam kapı', 'باب زجاجي'],
        'All zip': ['هەمووی زیپ', 'Tümü zip', 'الكل زيب'],
        'All glass': ['هەمووی جامی گیۆتین', 'Tümü cam', 'الكل زجاج'],
        'All sliding glass': ['هەمووی شوشەی سلاید', 'Tümü sürme cam', 'الكل زجاج منزلق'],
        'Remove all': ['لابردنی هەموو', 'Tümünü kaldır', 'إزالة الكل'],
        'Guillotine stacking': ['کۆبوونەوەی جامی گیۆتین', 'Giyotin toplanma yönü', 'اتجاه تجميع الجيوتين'],
        'Stacks at top (standard)': ['لە سەرەوە کۆدەبێتەوە (ستاندارد)', 'Üstte toplanır (standart)', 'يتجمع في الأعلى (قياسي)'],
        'Stacks at bottom (reverse)': ['لە خوارەوە کۆدەبێتەوە (پێچەوانە)', 'Altta toplanır (ters)', 'يتجمع في الأسفل (عكسي)'],
        'Closure opening': ['کرانەوەی داپۆشەکان', 'Kapama açıklığı', 'فتحة الإغلاق'],
        'Cleaning position (pane tilts inward)': ['دۆخی پاککردنەوە (جامەکە بەرەو ناوەوە لار دەبێتەوە)', 'Temizlik konumu (cam içe yatar)', 'وضع التنظيف (يميل اللوح للداخل)'],

        'Lights': ['ڕووناکییەکان', 'Aydınlatma', 'الأضواء'],
        'Scenes': ['دۆخە ئامادەکان', 'Sahneler', 'المشاهد'],
        'Dinner': ['ئێوارەخوان', 'Akşam yemeği', 'عشاء'],
        'Party (RGB)': ['ئاهەنگ (RGB)', 'Parti (RGB)', 'حفلة (RGB)'],
        'Daytime': ['ڕۆژ', 'Gündüz', 'نهار'],
        'Lights off': ['کوژاندنەوەی ڕووناکی', 'Işıklar kapalı', 'إطفاء الأضواء'],
        'Light zones': ['ناوچەکانی ڕووناکی', 'Işık bölgeleri', 'مناطق الإضاءة'],
        'Gutter LED attachment (perimeter / ambient)': ['LEDـی دەوروبەر (لەسەر ئاوەڕۆ)', 'Oluk LED aparatı (çevre / ambiyans)', 'LED المزراب (محيطي)'],
        'Panel edge LED (ceiling)': ['LEDـی لێواری پانێڵ (سەقف)', 'Panel kenar LED (tavan)', 'LED حافة الألواح (السقف)'],
        'Post LED (3rd direction)': ['LEDـی پایەکان', 'Dikme LED (3. yön)', 'LED الأعمدة'],
        'Giyotinyum top LED': ['LEDـی سەرەوەی جامی گیۆتین', 'Giyotinyum üst LED', 'LED أعلى الجيوتين'],
        'Light mode': ['جۆری ڕووناکی', 'Işık modu', 'وضع الإضاءة'],
        'Warm white': ['سپیی گەرم', 'Sıcak beyaz', 'أبيض دافئ'],
        'White': ['سپی', 'Beyaz', 'أبيض'],
        'Daylight': ['ڕووناکیی ڕۆژ', 'Gün ışığı', 'ضوء النهار'],
        'RGB cycle': ['خولی RGB', 'RGB döngü', 'دورة RGB'],
        'Custom colour': ['ڕەنگی دڵخواز', 'Özel renk', 'لون مخصص'],
        'Dimmer': ['کەمکردنەوەی ڕووناکی', 'Dimmer', 'خافت الإضاءة'],
        'Catalogue: 12V Samsung silicone LED, single/double/triple-direction ambient lighting, RGB and dimmer control; hidden 24V dimmable top lamp on Giyotinyum.': ['کەتەلۆگ: LEDـی سیلیکۆنی 12V سامسۆنگ، ڕووناکیی یەک/دوو/سێ ئاڕاستەیی، کۆنتڕۆڵی RGB و دیمەر؛ لامپی شاراوەی 24V لەسەر جامی گیۆتین.', 'Katalog: 12V Samsung silikon LED, tek/çift/üç yönlü ambiyans aydınlatma, RGB ve dimmer kontrolü; Giyotinyum\'da gizli 24V dimlenebilir üst lamba.', 'الكتالوج: LED سيليكون سامسونج 12 فولت، إضاءة محيطية باتجاه/اتجاهين/ثلاثة، تحكم RGB وخافت؛ مصباح علوي مخفي 24 فولت على الجيوتين.'],

        'Night': ['شەو', 'Gece', 'ليل'],
        'Rain': ['باران', 'Yağmur', 'مطر'],
        'Furniture': ['کەلوپەل', 'Mobilya', 'أثاث'],
        'Surroundings': ['دەوروبەر', 'Çevre', 'المحيط'],
        'Dimension lines': ['هێڵەکانی پێوانە', 'Ölçü çizgileri', 'خطوط الأبعاد'],
        'Technical view': ['دیمەنی تەکنیکی', 'Teknik görünüm', 'عرض تقني'],
        'Auto-rotate': ['سووڕانەوەی خۆکار', 'Otomatik döndür', 'تدوير تلقائي'],
        'Edge lines, hidden mechanism (piston, belt, chain, drainage) and part callouts': ['هێڵی لێوارەکان، میکانیزمی شاراوە (پیستۆن، قایش، زنجیر، ئاوەڕۆ) و ناوی پارچەکان', 'Kenar çizgileri, gizli mekanizma (piston, kayış, zincir, drenaj) ve parça etiketleri', 'خطوط الحواف، الآلية المخفية (مكبس، سير، سلسلة، تصريف) وتسميات الأجزاء'],
        'Sun and shadow simulation': ['هاوشێوەکردنی خۆر و سێبەر', 'Güneş ve gölge simülasyonu', 'محاكاة الشمس والظل'],
        'Time': ['کات', 'Saat', 'الوقت'],
        'Month': ['مانگ', 'Ay', 'الشهر'],
        'North direction': ['ئاڕاستەی باکوور', 'Kuzey yönü', 'اتجاه الشمال'],
        'Location': ['شوێن', 'Konum', 'الموقع'],
        '0° when the back of the structure faces north; rotate to see the real shadow. Sun elevation / azimuth:': ['٠° کاتێک پشتی پێکهاتەکە ڕووی لە باکوورە؛ بیسووڕێنە بۆ بینینی سێبەری ڕاستەقینە. بەرزی / ئاڕاستەی خۆر:', 'Yapının arkası kuzeye baktığında 0°; gerçek gölgeyi görmek için döndürün. Güneş yüksekliği / azimut:', '0° عندما يكون ظهر الهيكل نحو الشمال؛ دوّر لرؤية الظل الحقيقي. ارتفاع / سمت الشمس:'],
        'below the horizon': ['لە ژێر ئاسۆ', 'ufkun altında', 'تحت الأفق'],
        'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec': ['کانوونی دووەم,شوبات,ئازار,نیسان,ئایار,حوزەیران,تەمموز,ئاب,ئەیلوول,تشرینی یەکەم,تشرینی دووەم,کانوونی یەکەم', 'Oca,Şub,Mar,Nis,May,Haz,Tem,Ağu,Eyl,Eki,Kas,Ara', 'كانون الثاني,شباط,آذار,نيسان,أيار,حزيران,تموز,آب,أيلول,تشرين الأول,تشرين الثاني,كانون الأول'],
        'The model is representative; final dimensions and details are confirmed at the technical design stage.': ['مۆدێلەکە نموونەییە؛ پێوانە و وردەکارییە کۆتاییەکان لە قۆناغی دیزاینی تەکنیکیدا پشتڕاست دەکرێنەوە.', 'Model temsilidir; nihai ölçü ve detaylar teknik tasarım aşamasında kesinleşir.', 'النموذج توضيحي؛ تُعتمد الأبعاد والتفاصيل النهائية في مرحلة التصميم الفني.'],
        'The 3D view was interrupted; please reload the page.': ['دیمەنی 3D پچڕا؛ تکایە پەڕەکە نوێ بکەرەوە.', '3D görünüm kesintiye uğradı; lütfen sayfayı yenileyin.', 'انقطع العرض ثلاثي الأبعاد؛ يرجى إعادة تحميل الصفحة.'],

        'Back': ['گەڕانەوە', 'Geri', 'رجوع'],
        'Next': ['دواتر', 'İleri', 'التالي'],
        'Download image': ['داگرتنی وێنە', 'Görseli indir', 'تنزيل الصورة'],
        'Built & developed by:': ['دروستکردن و گەشەپێدان:', 'Tasarım ve geliştirme:', 'تصميم وتطوير:'],
        'Project summary and technical drawing': ['پوختەی پڕۆژە و نەخشەی تەکنیکی', 'Proje özeti ve teknik çizim', 'ملخص المشروع والرسم الفني'],
        'Project name': ['ناوی پڕۆژە', 'Proje adı', 'اسم المشروع'],
        'e.g. Villa terrace': ['بۆ نموونە: تەراسی ڤێلا', 'örn. Villa terası', 'مثال: تراس الفيلا'],
        'Code:': ['کۆد:', 'Kod:', 'الرمز:'],
        '· Dimensions in mm. Preliminary design drawing attached to the quotation; not a production drawing.': ['· پێوانەکان بە ملم. نەخشەی سەرەتایی دیزاینە و هاوپێچی نرخنامەیە؛ نەخشەی بەرهەمهێنان نییە.', '· Ölçüler mm. Teklif eki ön tasarım çizimidir; üretim çizimi değildir.', '· الأبعاد بالمليمتر. رسم تصميم أولي مرفق بعرض السعر؛ ليس رسماً للإنتاج.'],
        'Dimensions in mm. Preliminary design drawing attached to the quotation; not a production drawing.': ['پێوانەکان بە ملم. نەخشەی سەرەتایی دیزاینە و هاوپێچی نرخنامەیە؛ نەخشەی بەرهەمهێنان نییە.', 'Ölçüler mm. Teklif eki ön tasarım çizimidir; üretim çizimi değildir.', 'الأبعاد بالمليمتر. رسم تصميم أولي مرفق بعرض السعر؛ ليس رسماً للإنتاج.'],
        'Download technical drawing (PDF)': ['داگرتنی نەخشەی تەکنیکی (PDF)', 'Teknik çizimi indir (PDF)', 'تنزيل الرسم الفني (PDF)'],
        'Print': ['چاپکردن', 'Yazdır', 'طباعة'],
        'Download drawing (PNG)': ['داگرتنی نەخشە (PNG)', 'Çizimi indir (PNG)', 'تنزيل الرسم (PNG)'],
        'Copy design link': ['کۆپیکردنی لینکی دیزاین', 'Tasarım bağlantısını kopyala', 'نسخ رابط التصميم'],
        'Link copied': ['لینکەکە کۆپی کرا', 'Bağlantı kopyalandı', 'تم نسخ الرابط'],

        'Yes': ['بەڵێ', 'Evet', 'نعم'],
        'Area': ['ڕووبەر', 'Alan', 'المساحة'],
        'Approx. weight': ['کێشی نزیکەیی', 'Yaklaşık ağırlık', 'الوزن التقريبي'],
        'same as frame': ['هەمان ڕەنگی چوارچێوە', 'çerçeve ile aynı', 'نفس لون الإطار'],
        'Motor': ['ماتۆڕ', 'Motor', 'المحرك'],
        'Motor cover': ['سەرپۆشی ماتۆڕ', 'Motor kapağı', 'غطاء المحرك'],
        'remote control': ['ڕیمۆت کۆنتڕۆڵ', 'uzaktan kumanda', 'تحكم عن بعد'],
        'Project': ['پڕۆژە', 'Proje', 'المشروع'],
        'Date': ['بەروار', 'Tarih', 'التاريخ'],
        'Code': ['کۆد', 'Kod', 'الرمز'],
        'PLAN · TOP VIEW': ['نەخشە · دیمەنی سەرەوە', 'PLAN · ÜST GÖRÜNÜŞ', 'مسقط · منظر علوي'],
        'FRONT VIEW': ['دیمەنی پێشەوە', 'ÖN GÖRÜNÜŞ', 'منظر أمامي'],
        'LEFT VIEW': ['دیمەنی چەپ', 'SOL GÖRÜNÜŞ', 'منظر أيسر'],
        'RIGHT VIEW': ['دیمەنی ڕاست', 'SAĞ GÖRÜNÜŞ', 'منظر أيمن'],

        'Rennu Column': ['ستوونی Rennu', 'Rennu Dikme', 'عمود Rennu'],
        'hidden water drainage': ['ئاوەڕۆی شاراوە', 'gizli su tahliyesi', 'تصريف مياه مخفي'],
        'Rennu Rail': ['ڕایەڵی Rennu', 'Rennu Ray', 'سكة Rennu'],
        'Rennu Gutter + LED attachment': ['ئاوەڕۆی Rennu + شوێنی LED', 'Rennu Oluk + LED aparatı', 'مزراب Rennu + ملحق LED'],
        'Rennu Panel': ['پانێڵی Rennu', 'Rennu Panel', 'لوح Rennu'],
        'edge-axis rotation, double skin, edge LED': ['سووڕانەوە لەسەر تەوەری لێوار، دوو چین، LEDـی لێوار', 'kenar eksenli dönüş, çift cidar, kenar LED', 'دوران على محور الحافة، جدار مزدوج، LED الحافة'],
        'Linear piston + T12 timing belt': ['پیستۆنی هێڵی + قایشی T12', 'Lineer piston + T12 triger kayışı', 'مكبس خطي + سير توقيت T12'],
        '95–115° panel angle': ['گۆشەی پانێڵ ٩٥–١١٥°', '95–115° panel açısı', 'زاوية اللوح 95–115°'],
        'Scissor linkage + 608 ZZ bearing wheels': ['میکانیزمی مقەستی + تایەی بێرینگی 608 ZZ', 'Makas mekanizması + 608 ZZ rulmanlı tekerlekler', 'آلية مقصّية + عجلات بمحامل 608 ZZ'],
        'panels stack on the motor side': ['پانێڵەکان لە لای ماتۆڕ کۆدەبنەوە', 'paneller motor tarafında toplanır', 'تتراصّ الألواح جهة المحرك'],
        'Zip screen cassette': ['کاسێتی زیپ سکرین', 'Zip perde kasası', 'علبة ستارة الزيب'],
        'zipped side guides + bottom bar': ['ڕێڕەوی لاتەنیشتی زیپدار + شریتی خوارەوە', 'fermuarlı yan kılavuzlar + alt çubuk', 'مجارٍ جانبية بسحّاب + قضيب سفلي'],
        'motorised': ['ماتۆڕدار', 'motorlu', 'بمحرك'],
        'inox chain': ['زنجیری ستیل', 'inox zincir', 'سلسلة ستانلس'],
        'top motor box': ['سندوقی ماتۆڕ لە سەرەوە', 'üst motor kutusu', 'علبة محرك علوية'],
        'hidden top LED': ['LEDـی شاراوەی سەرەوە', 'gizli üst LED', 'LED علوي مخفي'],
        'Sliding glass system': ['سیستەمی شوشەی سلاید', 'Sürme cam sistemi', 'نظام الزجاج المنزلق'],
        'multi-track': ['چەند ڕێڕەو', 'çok raylı', 'متعدد المسارات'],
        'panels stack to one side': ['پانێڵەکان لە لایەک کۆدەبنەوە', 'paneller tek tarafa toplanır', 'تتراصّ الألواح في جهة واحدة'],
        'Thick cornice batten (full LED)': ['چێوەی ئەستووری کۆرنیش (LEDـی تەواو)', 'Kalın korniş çıtası (tam LED)', 'عارضة كورنيش سميكة (LED كامل)'],
        'T10 timing belt': ['قایشی T10', 'T10 triger kayışı', 'سير توقيت T10'],
        'fabric keder': ['کێدەری قوماش', 'kumaş kederi', 'كيدر القماش'],
        'Blackout fabric': ['قوماشی بلاکئاوت', 'Blackout kumaş', 'قماش بلاك آوت'],
        'fire retardant': ['دژە ئاگر', 'alev geciktirici', 'مقاوم للحريق'],
        'Double-leaf glass door': ['دەرگای شوشەی دوو دەری', 'Çift kanatlı cam kapı', 'باب زجاجي بمصراعين'],
        'fixed side lights': ['شوشەی جێگیری لاتەنیشت', 'sabit yan camlar', 'زجاج جانبي ثابت'],
        'opens outward': ['بەرەو دەرەوە دەکرێتەوە', 'dışa açılır', 'يفتح للخارج']
    };

    // Studio labels whose English text means something else elsewhere on the page.
    var BY_KEY = {
        side_back: ['پشتەوە', 'Arka', 'الخلف'],
        off: ['نییە', 'Yok', 'لا يوجد']
    };

    function lookup(key) {
        var e = D[key];
        return e && e[COL] != null ? e[COL] : null;
    }

    function translate(text) {
        if (!text) return text;
        var core = text.replace(/\s+/g, ' ').trim();
        if (!core) return text;
        var out = lookup(core);
        if (out == null && core.indexOf(' · ') > -1) {
            var changed = false;
            out = core.split(' · ').map(function (part) {
                var t = lookup(part);
                if (t != null) { changed = true; return t; }
                return part;
            }).join(' · ');
            if (!changed) out = null;
        }
        if (out == null) return text;
        return text.match(/^\s*/)[0] + out + text.match(/\s*$/)[0];
    }

    function translatePage() {
        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: function (n) {
                var tag = n.parentNode && n.parentNode.nodeName;
                return tag === 'SCRIPT' || tag === 'STYLE' ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
            }
        });
        var nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach(function (n) {
            var t = translate(n.nodeValue);
            if (t !== n.nodeValue) n.nodeValue = t;
        });
        ['aria-label', 'title', 'placeholder', 'alt'].forEach(function (attr) {
            document.querySelectorAll('[' + attr + ']').forEach(function (el) {
                var v = el.getAttribute(attr), t = translate(v);
                if (t !== v) el.setAttribute(attr, t);
            });
        });
    }

    function translateConfig() {
        document.querySelectorAll('[data-studio3d][data-config]').forEach(function (el) {
            try {
                var cfg = JSON.parse(el.getAttribute('data-config'));
                var labels = cfg.labels || {};
                Object.keys(labels).forEach(function (k) {
                    if (BY_KEY[k] && BY_KEY[k][COL] != null) labels[k] = BY_KEY[k][COL];
                    else if (typeof labels[k] === 'string') labels[k] = translate(labels[k]);
                });
                el.setAttribute('data-config', JSON.stringify(cfg));
            } catch (e) {}
        });
    }

    // Reload in the chosen language, keeping the current design. The quote link carries
    // the design's share URL (…?cfg=…) in its message, so it is taken from there.
    function switchTo(next) {
        try { localStorage.setItem('shad3d_lang', next); } catch (e) {}
        var cfg = null;
        try {
            var q = document.querySelector('[data-studio-quote]');
            var m = /[?&]cfg=([^\s&#]+)/.exec(new URL(q.href).searchParams.get('message') || '');
            if (m) cfg = m[1];
        } catch (e) {}
        location.href = location.pathname + '?lang=' + next + (cfg ? '&cfg=' + cfg : '');
    }

    function initSwitch() {
        document.querySelectorAll('[data-lang]').forEach(function (a) {
            var code = a.getAttribute('data-lang');
            if (code === lang) { a.classList.add('is-current'); a.setAttribute('aria-current', 'true'); }
            function go(e) { e.preventDefault(); if (code !== lang) switchTo(code); }
            a.addEventListener('click', go);
            a.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') go(e); });
        });
    }

    try { if (COL != null) { translateConfig(); translatePage(); } } catch (e) { console.warn('[i18n]', e); }
    initSwitch();
})();
