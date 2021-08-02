<?php

namespace POCPrinterInkTonerCartridgeSearchWidget\Providers;

use POCPrinterInkTonerCartridgeSearchWidget\Widgets\PrinterInkTonerCartridgeSearchWidget;
use IO\Helper\ResourceContainer;
use Plenty\Plugin\Events\Dispatcher;
use Plenty\Plugin\ServiceProvider;
use Plenty\Plugin\Templates\Twig;
use Plenty\Modules\ShopBuilder\Contracts\ContentWidgetRepositoryContract;

class PrinterInkTonerCartridgeSearchProvider extends ServiceProvider
{

    public function register()
    {

    }

    public function boot(Twig $twig, Dispatcher $eventDispatcher)
    {
        $widgetRepository = pluginApp(ContentWidgetRepositoryContract::class);
        $widgetRepository->registerWidget(PrinterInkTonerCartridgeSearchWidget::class);

        $eventDispatcher->listen('IO.Resources.Import', function (ResourceContainer $container) {
            $container->addScriptTemplate('POCPrinterInkTonerCartridgeSearchWidget::Content.Scripts');
        }, 0);
    }
}

