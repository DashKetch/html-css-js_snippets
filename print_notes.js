function printNotes() {
    const notesContent = document.getElementById('notes').value;
    const printWindow = window.open('', '', 'width=600,height=400');
    printWindow.document.write(`
        <html>
        <head>
            <title>Print Notes</title>
        </head>
        <body>
            <pre style="font-family: Arial, sans-serif;">${notesContent}</pre>
            <script>
                window.onload = function() {
                    window.print();
                    window.onafterprint = function() {
                        window.close();
                    };
                };
            <\/script>
        </body>
        </html>
    `);
    printWindow.document.close();
}
